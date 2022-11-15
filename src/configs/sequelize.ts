import { Sequelize } from "sequelize-typescript";
import { env as _env } from "process";
import * as pg from 'pg';

const env = _env.NODE_ENV || 'development';
const config = require(__dirname + '/../configs/config.json')[env];

export const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
  models: [__dirname + '/models'],
  dialectModule: pg
});