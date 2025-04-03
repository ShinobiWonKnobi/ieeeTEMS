import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// import fs from "fs";
import Image from "./models/ImageModel.js";
// import path from "path";
import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '50mb' })); // Increase limit for larger payloads

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(err.statusCode || 500).json({
    error: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

// API Routes
// Get images by name
app.get('/images/name/:name', async (req, res, next) => {
  try {
    const images = await Image.find({ name: req.params.name });

    if (!images.length) {
      return res.status(404).json({ error: "No images found for this name" });
    }

    res.json({ 
      name: req.params.name, 
      count: images.length,
      images: images.map(img => ({
        id: img._id,
        image: img.image
      }))
    });
  } catch (error) {
    next(error);
  }
});

// Retrieve Image by ID
app.get("/images/:id", async (req, res, next) => {
  try {
    const image = await Image.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
    
    res.json({
      id: image._id,
      name: image.name,
      image: image.image
    });
  } catch (error) {
    next(error);
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Apply error handler middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // Connect to DB first
    app.listen(PORT, () => {
      console.log(`🚀 Server started at http://localhost:${PORT}`);
    });
  } catch (error) {
    // connectDB already logs the error and exits, but we catch here just in case
    console.error("Failed to start server:", error);
    process.exit(1); // Ensure exit if connectDB somehow didn't
  }
};

startServer(); // Call the async function to start the server
