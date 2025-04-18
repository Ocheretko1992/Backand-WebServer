import createHttpError from 'http-errors';
import { addMovie, deleteMovieById, getMovies, getMoviesById, updateMovie } from '../services/movies.js';

//*===========================================================================
export const getMoviesController = async (req, res) => {
  const data = await getMovies();
  res.json({
    status: 200,
    message: 'Successfully find movies',
    data,
  });
};
//*===========================================================================

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getMoviesById(id);

  if (!data) {
    throw createHttpError(404, `Movie with id=${id} not found`);
  }
  res.json({
    status: 200,
    message: `Successfully find movie with id=${id}`,
    data,
  });
};
//*===========================================================================

export const addMovieController = async (req, res) => {
  const data = await addMovie(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully add movie',
    data,
  });
};

//*===========================================================================
 
export const upsertMovieController = async (req, res) => {
  const { id } = req.params;

  const {data, isNew} = await updateMovie(id, req.body,{upsert:true});
  
  const status = isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: "Sucessfully update movie",
    data,
  });

};
//*===========================================================================

export const patchMovieController = async (req, res) => {
  const { id } = req.params;
  const resault = await updateMovie(id, req.body);

    if (!resault) {
      throw createHttpError(404, `Movie with id=${id} not found`);
  }
  res.json({
    status: 200,
    message: "Successfully update movie",
    data: resault.data,
  });
};
//*===========================================================================

export const deleteMovieController = async (req, res) => {
  const { id } = req.params;
  const data = await deleteMovieById(id);
      if (!data) {
        throw createHttpError(404, `Movie with id=${id} not found`);
  }
  
  res.status(204).send();
};

