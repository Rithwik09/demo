import Mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await Mongoose.connect(process.env.MONGO_URI as string,
        {
          // useNewUrlParser: true,
          // useUnifiedTopology: true,
        },
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;
