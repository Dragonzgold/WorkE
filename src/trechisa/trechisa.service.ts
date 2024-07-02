import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class TrechisaService {

  constructor(
    @InjectDataSource('secondDataSource')
    private readonly seconddataSource: DataSource,
    @InjectDataSource('dataToTransfer')
    private readonly datatotransfer: DataSource
  ) { }

  async findAll() {
    try {

      const dataToTransfer = await this.datatotransfer.query("SELECT * FROM trechisa");

      if (dataToTransfer.length === 0) {
        console.log('No hay datos para transferir.');
        return;
      }

      const columns = await this.seconddataSource.query("SHOW COLUMNS FROM trechisa");
      const columnNames = columns.map((column: any) => column.Field);

      for (const row of dataToTransfer) {
        const values = columnNames.map(column => row[column]);

        const id = row['NUMEDOCU'];

        const existingRow = await this.seconddataSource.query('SELECT 1 FROM trechisa WHERE NUMEDOCU = ?', [id]);

        if (existingRow.length === 0) {
          const insertQuery = `INSERT INTO trechisa (${columnNames.join(', ')}) VALUES (${columnNames.map(() => '?').join(', ')})`;
          await this.seconddataSource.query(insertQuery, values);
          console.log('Transferencia completada.');
        } else {
        }
      }
    } catch (err) {
      console.log('A cocurrido un error: ', err)
    }
  }
}
