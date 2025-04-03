import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getEnvVar } from './utils/getEnvVar.js';
import { getMovies, getMoviesById } from './services/movies.js';
// import pino from "pino-http";

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  // app.use(pino({
  //   transport: {
  //     target: "pino-pretty"
  //   }
  // }));

  app.get('/api/movies', async (req, res) => {
    const data = await getMovies();
    res.json({
      status: 404,
      message: "Successfully find movies",
      data,
    });
  });

  app.get('/api/movies/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getMoviesById(id);

    if (!data) {
      return res.status(404).json({
        message: `Movie with id=${id} not found`,
      });
    }
    res.json({
      status: 200,
      data,
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: `${res.url} not found`,
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: error.message,
    });
  });

  const port = Number(getEnvVar('PORT', 3000));

  app.listen(port, () => console.log(`Server runing on ${port} port`));
};
