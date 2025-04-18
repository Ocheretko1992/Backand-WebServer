import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getEnvVar } from './utils/getEnvVar.js';
// import { loggerPino } from './middlewares/lloger.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import moviesRouter from './routers/movies.js';
import { loggerPino } from './middlewares/lloger.js';


export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(loggerPino);

  app.use('/movies', moviesRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const port = Number(getEnvVar('PORT', 3000));

  app.listen(port, () => console.log(`Server runing on ${port} port`));
};
