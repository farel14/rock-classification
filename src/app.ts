import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'strong-error-handler';
import dotenv from 'dotenv';
import cors from 'cors';
import {movies} from './routes/movies';
import {actors} from './routes/actors';
import indexRouter from './routes';

export const app = express();

dotenv.config();

app.use(cors());

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
app.use(bodyParser.json({limit: '5mb'}));

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/', indexRouter);
app.use('/movies', movies);
app.use('/actors', actors);

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
