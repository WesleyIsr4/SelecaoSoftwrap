import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import routes from './Routes';
import cors from 'cors'

import './database';
import AppError from './Error/AppError';

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({status: 'error', message: err.message});
  }

  return response.status(500).json({status: 'error', message: 'Internal server error'});
})


app.listen(4321, () => {
  console.log('🚀 Server started on port 3333!');
});
