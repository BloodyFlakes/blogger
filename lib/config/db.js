import mongoose from 'mongoose';

export const ConnectDb = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('DB Connected');
};
