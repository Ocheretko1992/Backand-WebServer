import express from 'express';
import {
  getMovieByIdController,
  getMoviesController,
} from '../controllers/movies.js';
import { ctrlWraper } from '../utils/ctrlWraper.js';

//*================================ MOVIES ===========================================
const moviesRouter = express.Router();

moviesRouter.get('/', ctrlWraper(getMoviesController));

moviesRouter.get('/:id', ctrlWraper(getMovieByIdController));

export default moviesRouter;
//*===========================================================================
 