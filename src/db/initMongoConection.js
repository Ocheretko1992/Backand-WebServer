import mongoose from "mongoose";
import { getEnvVar } from "../utils/getEnvVar.js";


export const initMongoConection = async () => {
  try {
    const password = getEnvVar('MONGODB_PASSWORD');
    
    await mongoose.connect(
      `mongodb+srv://Ocheretko:${password}@cluster0.qgp7txo.mongodb.net/my-movies?retryWrites=true&w=majority&appName=Cluster0`,
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};