import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import supabase from "./config/supabaseClient.js";

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
    const { data, error } = await supabase
      .from('images')
      .select('id, image')
      .eq('name', req.params.name);

    if (error) throw error;

    if (!data || !data.length) {
      return res.status(404).json({ error: "No images found for this name" });
    }

    res.json({ 
      name: req.params.name, 
      count: data.length,
      images: data
    });
  } catch (error) {
    next(error);
  }
});

// Retrieve Image by ID
app.get("/images/:id", async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('images')
      .select('id, name, image')
      .eq('id', req.params.id)
      .single();

    if (error) {
      // Handle potential 'PGRST116' error if no row is found with single()
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: "Image not found" });
      }
      throw error;
    }
    
    if (!data) {
      return res.status(404).json({ error: "Image not found" });
    }
    
    res.json(data);

  } catch (error) {
    next(error);
  }
});

// Team Members endpoints
app.get('/team_members', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/team_members', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .insert([req.body]);
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/team_members/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .update(req.body)
      .eq('id', req.params.id);
    if (error) throw error;
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/team_members/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Events endpoints
app.get('/events', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/events', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .insert([req.body]);
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/events/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .update(req.body)
      .eq('id', req.params.id);
    if (error) throw error;
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/events/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .delete()
      .eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact Submissions endpoints
app.get('/contact_submissions', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/contact_submissions', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([req.body]);
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/contact_submissions/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update(req.body)
      .eq('id', req.params.id);
    if (error) throw error;
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/contact_submissions/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Contact submission deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
    app.listen(PORT, () => {
      console.log(`🚀 Server started at http://localhost:${PORT}`);
      console.log('Supabase client initialized.');
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
