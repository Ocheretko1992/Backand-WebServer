import { model, Schema } from 'mongoose';

const moviSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
    required: true,
  },
  type: {
    type: String,
    enum: ['film','serial'],
    default: 'film',
    required: true,
  },
});

const MovieColection = model('movie', moviSchema);

export default MovieColection;
