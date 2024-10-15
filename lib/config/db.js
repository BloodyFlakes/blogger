import mongoose from 'mongoose';

export const ConnectDb = async () => {
  await mongoose.connect(
    'mongodb+srv://BloodyFlakes:s7jB0OUq9yMMCRRD@cluster0.eddpm.mongodb.net/blog-app'
  );
  console.log('DB Connected');
};
