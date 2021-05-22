import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URI: string | any = process.env.MONGO_URI;

export const connect = () => {
  try {
    mongoose.connect(
      URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log('🔥[database]: Database connection established successfully');
      }
    );
  } catch {
    console.log('❌Failed to established database connection');
  }
};
