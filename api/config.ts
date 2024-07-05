import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  postgresUrl: process.env.POSTGRES_URL,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};
