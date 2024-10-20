import mongoose from 'mongoose';

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB Connected');
  } catch (error) {
    console.error('DB Connection Error:', error);
  }
};
