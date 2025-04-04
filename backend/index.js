import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";
import { connectDB, getDBStatus } from "./src/lib/db.js";
import { app, server } from "./src/lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

// Middleware
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

// Start DB and server
const connectAndStartServer = async () => {
  await connectDB();

  server.listen(PORT, () => {
    console.log(`🚀 Server is running on PORT: ${PORT}`);
  });
};

connectAndStartServer();

// Health check
app.get("/", (req, res) => {
  const { isDBConnected, failedDB } = getDBStatus();

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