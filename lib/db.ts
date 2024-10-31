import mysql from 'mysql2/promise';

let connection: any;

export const connectToDatabase = async () => {
  if (connection) return connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true,
      },
    });

    return connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Could not connect to database');
  }
};
