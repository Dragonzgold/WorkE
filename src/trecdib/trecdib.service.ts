import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class TrecdibService {
  constructor(
    @InjectDataSource('secondDataSource')
    private readonly seconddataSource: DataSource,
    @InjectDataSource('dataToTransfer')
    private readonly datatotransfer: DataSource
  ) { }

  async findAll() {
    try {
      await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=0');
    
      const dataToTransfer = await this.datatotransfer.query("SELECT * FROM trecdiab");
    
      if (dataToTransfer.length === 0) {
        console.log('No hay datos para transferir.');
        await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=1');
        return;
      }
    
      const columns = await this.seconddataSource.query("SHOW COLUMNS FROM trecdiab");
      const columnNames = columns.map((column: any) => column.Field);
    
      for (const row of dataToTransfer) {
        const values = columnNames.map(column => row[column]);
    
        const numereci = row['NUMERECI'];
        const tipocobr = row['TIPOCOBR'];
        const linenume = row['LINENUME']
    
        const existingRow = await this.seconddataSource.query(
          'SELECT 1 FROM trecdiab WHERE NUMERECI = ? AND TIPOCOBR = ? AND LINENUME = ?',
          [numereci, tipocobr, linenume]
        );
    
        if (existingRow.length === 0) {
          const insertQuery = `INSERT INTO trecdiab (${columnNames.join(', ')}) VALUES (${columnNames.map(() => '?').join(', ')})`;
          await this.seconddataSource.query(insertQuery, values);
          console.log('Transferencia completada.');
        } else {
          console.log('Data repetida. No se van a insertar estos datos');
        }
      }
      await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=1');
    } catch (err) {
      console.log('Ha ocurrido un error: ', err);
      await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=1');
    }
  }
}
