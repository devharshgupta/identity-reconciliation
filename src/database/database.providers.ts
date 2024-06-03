import * as path from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
        synchronize:
          process.env.NODE_ENV != 'production'
            ? process.env.DB_SYNCHRONIZE?.toLowerCase() === 'true'
            : false,
      });

      return dataSource.initialize();
    },
  },
];
