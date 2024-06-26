import dotenv from 'dotenv';
dotenv.config();

export const config = {
  db: {
    storage: process.env.DB_STORAGE || './database.sqlite3',
    logging: process.env.DB_LOGGING || 'false',
  },
  port: parseInt(process.env.PORT || '3001'),
  env: process.env.NODE_ENV || 'dev',
};
