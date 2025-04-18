import express from 'express';
import {
  addMovieController,
  deleteMovieController,
  getMovieByIdController,
  getMoviesController,
  patchMovieController,
  upsertMovieController,
} from '../controllers/movies.js';
import { ctrlWraper } from '../utils/ctrlWraper.js';
import { validateBody } from '../utils/validateBody.js';
import { movieAddSchema, movieUpdateSchema } from '../validation/movies.js';
import { isValidId } from '../middlewares/isValidId.js';

//*================================ MOVIES ===========================================

const moviesRouter = express.Router();
//*===========================================================================

moviesRouter.get('/', ctrlWraper(getMoviesController));
//*===========================================================================

moviesRouter.get('/:id', isValidId, ctrlWraper(getMovieByIdController));
//*===========================================================================

moviesRouter.post(
  '/',
  validateBody(movieAddSchema),
  ctrlWraper(addMovieController),
);
//*===========================================================================

moviesRouter.put(
  '/:id',
  isValidId,
  validateBody(movieAddSchema),
  ctrlWraper(upsertMovieController),
);
//*===========================================================================

moviesRouter.patch(
  '/:id',
  isValidId,
  validateBody(movieUpdateSchema),
  ctrlWraper(patchMovieController),
);
//*===========================================================================

moviesRouter.delete('/:id', isValidId, ctrlWraper(deleteMovieController));

export default moviesRouter;
//*===========================================================================
