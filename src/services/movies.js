import MovieColection from '../db/models/Movie.js';

export const getMovies = () => MovieColection.find();

export const getMoviesById = (id) => MovieColection.findOne({ _id: id });
