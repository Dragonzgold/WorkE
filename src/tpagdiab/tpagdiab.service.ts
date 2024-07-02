import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class TpagdiabService {

  constructor(
    @InjectDataSource('secondDataSource')
    private readonly seconddataSource: DataSource,
    @InjectDataSource('dataToTransfer')
    private readonly datatotransfer: DataSource
  ) { }

  async findAll(select:string, dateStart:Date, dateEnd:Date) {
    try {
      const testwork = select;
      const dateOne = dateStart.toISOString().slice(0, 19).replace('T', ' ');
      const dateTwo = dateEnd.toISOString().slice(0, 19).replace('T', ' ');
      
      // Desactivar verificaciones de clave foránea
      await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=0');
    
      const dataToTransfer = await this.datatotransfer.query(`SELECT * FROM tpagdiab WHERE TIPODOCU LIKE '%${testwork}%' AND FECHA BETWEEN '${dateOne}' AND '${dateTwo}'`);
    
      if (dataToTransfer.length === 0) {
        console.log('No hay datos para transferir.');
        await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=1');  // Reactivar verificaciones de clave foránea
        return;
      }
    
      const columns = await this.seconddataSource.query(`SHOW COLUMNS FROM tpagdiab`);
      const columnNames = columns.map((column) => column.Field);
    
      for (const row of dataToTransfer) {
        const values = columnNames.map((column) => row[column]);
        const numereci = row['NUMERECI']
        const tipodocu = row['TIPODOCU']
        const numedocu = row['NUMEDOCU']
        const linenume = row['LINENUME']
        const codiprov = row['CODIPROV']
        
        const existingRow = await this.seconddataSource.query('SELECT 1 FROM tpagdiab WHERE NUMERECI = ? AND TIPODOCU = ? AND NUMEDOCU = ? AND LINENUME = ? AND CODIPROV = ?',[numereci, tipodocu, numedocu, linenume, codiprov]);
    
        if (existingRow.length === 0) {
          // Verificar que las claves foráneas existan en la tabla destino
          const foreignKeyExists = await this.seconddataSource.query('SELECT 1 FROM tcpcz WHERE TIPO = ?', [row['TIPODOCU']]);
    
          if (foreignKeyExists.length > 0) {
            const insertQuery = `INSERT INTO tpagdiab (${columnNames.join(', ')}) VALUES (${columnNames.map(() => '?').join(', ')})`;
            await this.seconddataSource.query(insertQuery, values);
            console.log('Transferencia completada');
          } else {
            console.log(`No se encontro ningun dato`);
          }
        }
      }
    
      // Reactivar verificaciones de clave foránea
      await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=1');
    } catch (err) {
      console.log('Ha ocurrido un error: ', err);
    
      // Asegurarse de reactivar las verificaciones de clave foránea en caso de error
      await this.seconddataSource.query('SET FOREIGN_KEY_CHECKS=1');
    }
  }
}
