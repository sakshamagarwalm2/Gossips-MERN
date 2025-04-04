import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose"; // 👈 Directly import mongoose
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import { app, server } from "./src/lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

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

// DB status flags
let isDBConnected = false;
let faild = false;

// Start server and connect DB
server.listen(PORT, async () => {
  console.log("Server is running on PORT:", PORT);

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected:", conn.connection.host);
    isDBConnected = true;
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    faild = true;
  }
});

// Health check route
app.get("/", (req, res) => {
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
    FaildDB: faild ? "YES" : "NO",
  });
});
