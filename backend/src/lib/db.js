import mongoose from "mongoose";


let isDBConnected = false;
let failedDB = false;

export const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    isDBConnected = true;
  } catch (error) {
    console.log("MongoDB connection error:", error);
    failedDB = true;
  }
};

// Export status
export const getDBStatus = () => ({
  isDBConnected,
  failedDB,
});