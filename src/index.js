// import express from 'express';
// import movies from './db/movies.js';
// import cors from "cors";
// import pinoLoger from "pino-http";

// const app = express();

// app.get("/", (request, response) => {
//   response.send("<h1>Home Page</h1>");
// });
// app.get("/contacts", (request, response) => {
//   response.send('<h1>Contacts Page</h1>');
// });

// app.listen(3333, () => console.log('Hello Oleh, PORT 3333'));

//===============================================================================

// const app = express();

// app.get('/movies', (req, res) => {
//   res.send(movies);
//   res.json(movies);
// });

// app.listen(3333, () => console.log('Hello Oleh, PORT 3333'));

//================================= middleware ==============================================

// const app = express();

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.get('/products', (req, res) => {
//   res.json([]);
// });

// app.get('/movies', (req, res) => {
//   res.json(movies);
// });

// app.listen(3333, () => console.log('Hello Oleh, PORT 3333'));

//============================= CORS + pino-http ==================================================

// const app = express();

// app.use(cors());

// const logger = pinoLoger({
//   transport: {
//     target: 'pino-pretty',
//   }
// });
// app.use(logger);

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.get('/products', (req, res) => {
//   res.json([]);
// });

// app.get('/movies', (req, res) => {
//   res.json(movies);
// });

// app.listen(3333, () => console.log('Hello Oleh, PORT 3333'));

//================================pino-http==================================================

// const app = express();

// app.use(cors());

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.get('/products', (req, res) => {
//   res.json([]);
// });

// app.get('/movies', (req, res) => {
//   res.json(movies);
// });

// app.use((req, res) => {
//   res.status(404).json({
//     message: `${req.url} not found`
//   });
// });

// app.listen(3333, () => console.log('Hello Oleh, PORT 3333'));

//*==================================BACKEND=========================================//

import { initMongoConection } from './db/initMongoConection.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoConection();
  startServer();
};

bootstrap();
