import { ipcMain } from 'electron'
import mysql from 'mysql2/promise'

export const dbAuth = () => {
  ipcMain.on('db-auth', async (event, id, password) => {
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: id,
        password: password,
        database: 'tmplDB'
      })

      await connection.end()
      event.reply('db-auth-response', {
        success: true,
        message: 'Connected to MySQL database!'
      })
    } catch (error) {
      console.error('Error connecting to MySQL:', error)
      event.reply('db-auth-response', {
        success: false,
        message: 'Failed to connect to MySQL database.'
      })
    }
  })
}
