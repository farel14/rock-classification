import {Sequelize} from 'sequelize-typescript';
import { env as _env } from 'process';


export const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'movies',
  storage: ':memory:',
  models: [__dirname + '/models']
});
// const env = _env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];


// export const sequelize = new Sequelize({
//   ...(_env[config.use_env_variable] as),
//   models: [__dirname + '/models']
// }, config);
