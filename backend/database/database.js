import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("Connected", process.env.MONGO_URI);
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  return connection;
};
