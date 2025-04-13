# Simple Vercel Deployment Guide

This guide provides the essential steps for deploying the IEEE TEMS website to Vercel.

## Frontend Deployment

1. **Import frontend to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your Git repository
   - Select `frontend` directory as the root directory
   - Add environment variable:
     - `VITE_API_BASE_URL`: URL of your deployed backend API
   - Click "Deploy"

## Backend Deployment

1. **Import backend to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your Git repository
   - Select `backend` directory as the root directory
   - Add environment variables:
     - `SUPABASE_URL`: Your Supabase URL
     - `SUPABASE_ANON_KEY`: Your Supabase anonymous key
     - `FRONTEND_URL`: URL of your deployed frontend
   - Click "Deploy"

## Testing

After deployment, visit your frontend URL and verify:
- Navigation between pages works
- Contact form submissions are saved
- Team members and events are displayed correctly
- Dark mode toggle works

## Quick Troubleshooting

- **404 errors on refresh**: Check `frontend/vercel.json` has the proper rewrites
- **API connection issues**: Verify environment variables are set correctly
- **CORS issues**: Make sure `FRONTEND_URL` in backend matches your actual frontend URL 