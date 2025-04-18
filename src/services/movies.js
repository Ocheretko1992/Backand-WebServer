import MovieColection from '../db/models/Movie.js';

export const getMovies = () => MovieColection.find();

export const getMoviesById = (id) => MovieColection.findOne({ _id: id });

export const addMovie = (payload) => MovieColection.create(payload);

export const updateMovie = async (_id, payload, options = {}) => {
  const { upsert = false } = options;
  const rawResult = await MovieColection.findOneAndUpdate({ _id }, payload, {
    upsert,
    includeResultMetadata: true,
  });

  if (!rawResult || !rawResult.value) return null;
  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject.upserted),
  };
};

export const deleteMovieById = (_id) => MovieColection.findOneAndDelete({ _id });
