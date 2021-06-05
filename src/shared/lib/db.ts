import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URI: string | any = process.env.MONGO_URI;

export const connect = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('🔥[database]: Database connection established successfully');
    })
    .catch(() => {
      console.log('❌[database]: Failed to establish database connection');
    });
};
