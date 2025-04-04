import mongoose from "mongoose";

// Create cached connection variable
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  // If connection exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If not connected but connection is in progress, wait for it
  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      maxPoolSize: 10, // Maintain up to 10 socket connections
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts)
      .then((mongoose) => {
        console.log(`MongoDB connected: ${mongoose.connection.host}`);
        return mongoose;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        cached.promise = null; // Reset on error
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};