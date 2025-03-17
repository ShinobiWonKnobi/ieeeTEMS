import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import Image from "./models/ImageModel.js";
import path from "path";
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
// Upload Image by Path
app.post("/upload", async (req, res, next) => {
  try {
    const { name, image } = req.body; // image contains the file path

    if (!name || !image) {
      return res.status(400).json({ error: "Name and image path are required" });
    }

    // Convert Windows path to cross-platform path
    const imagePath = path.resolve(image);

    if (!fs.existsSync(imagePath)) {
      return res.status(400).json({ error: "Image file does not exist" });
    }

    // Read and convert to Base64
    const imgData = fs.readFileSync(imagePath);
    const base64Image = imgData.toString("base64");

    // Save to MongoDB
    const newImage = new Image({ name, image: base64Image });
    await newImage.save();

    res.status(201).json({ 
      message: "Image uploaded successfully!", 
      imageId: newImage._id 
    });
  } catch (error) {
    next(error);
  }
});

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
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
  connectDB();
});
