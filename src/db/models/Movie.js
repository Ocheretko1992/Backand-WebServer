import { model, Schema } from 'mongoose';
import { typeList } from '../../constants/movies.js';
import { handleSaveError, setUpdateSettings } from './hooks.js';

const moviSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Назва фільму обов'язкова"],
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
      enum: typeList,
      default: typeList[0],
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);
//=======================hooks===============================================
moviSchema.post('save', handleSaveError);

moviSchema.pre('findOneAndUpdate', setUpdateSettings);

moviSchema.post('findOneAndUpdate', handleSaveError);
//======================================================================

const MovieColection = model('movie', moviSchema);

export default MovieColection;
