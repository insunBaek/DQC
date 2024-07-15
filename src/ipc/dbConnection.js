import { ipcMain } from 'electron';
import mysql from 'mysql2/promise';

export const dbConnection = () => {
  ipcMain.on('connect-db', async (event, id, password) => {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: id,
        password: password,
        database: 'sky'
      })

      console.log('MySQL connected!')
      const [rows] = await connection.query('SELECT NOW()')
      console.log('Current database time:', rows[0])

      await connection.end()

      return { success: true, message: 'Connected to MySQL database!' }
    } catch (error) {
      console.error('Error connecting to MySQL:', error)
      return { success: false, message: 'Failed to connect to MySQL database.' }
    }
  })
}
