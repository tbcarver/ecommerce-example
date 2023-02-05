import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'better-sqlite3',
  database: process.env.DB_PATH,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['database/migrations/*.ts'],
  subscribers: [],
});
