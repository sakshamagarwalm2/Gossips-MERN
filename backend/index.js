import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import { app, server } from "./src/lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

// App middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// DB status flags (must be shared outside of function)
let isDBConnected = false;
let failedDB = false;

// Connect DB before server starts
const connectAndStartServer = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected:", conn.connection.host);
    isDBConnected = true;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    failedDB = true;
  }

  // Start server after DB attempt
  server.listen(PORT, () => {
    console.log("🚀 Server is running on PORT:", PORT);
  });
};

connectAndStartServer(); // Call this function!

// Health check route
app.get("/", (req, res) => {
  console.log("Health check hit. DB_CONNECTED:", isDBConnected, "FailedDB:", failedDB);
  res.json({
    message: "API is running",
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET ? "SET" : "NOT SET",
    MONGODB_URI: process.env.MONGODB_URI ? "SET" : "NOT SET",
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME ? "SET" : "NOT SET",
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? "SET" : "NOT SET",
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? "SET" : "NOT SET",
    DB_CONNECTED: isDBConnected ? "YES" : "NO",
    FaildDB: failedDB ? "YES" : "NO"
  });
});
