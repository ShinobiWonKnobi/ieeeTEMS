# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the IEEE TEMS website to Vercel.

## Separate Deployments

This project consists of two parts that need to be deployed separately:
1. Frontend (React application)
2. Backend (Express API)

## Frontend Deployment

### Prerequisites
- A [Vercel](https://vercel.com) account
- Git repository with your project

### Steps

1. **Push your changes to a Git repository**
   - Make sure your repository includes the `vercel.json` configuration file

2. **Import your project to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your Git repository
   - Choose the `frontend` directory as the root directory
   
3. **Configure Environment Variables**
   - Navigate to "Settings" → "Environment Variables"
   - Add the following variable:
     - `VITE_API_BASE_URL`: URL of your deployed backend API (e.g., `https://api-ieee-tems.vercel.app`)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your frontend application
   - Once complete, Vercel will provide you with a URL for your deployed frontend

## Backend Deployment

### Prerequisites
- A [Vercel](https://vercel.com) account
- Git repository with your project

### Steps

1. **Create Vercel Environment Variables**
   - From your Vercel dashboard, navigate to your team or personal settings
   - Go to "Environment Variables"
   - Create the following environment variables:
     - `supabase_url`: Your Supabase URL
     - `supabase_anon_key`: Your Supabase anonymous key
     - `frontend_url`: URL of your deployed frontend

2. **Import your project to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your Git repository
   - Choose the `backend` directory as the root directory
   
3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your backend API using the configuration in `vercel.json`
   - Once complete, Vercel will provide you with a URL for your deployed API

## Testing Your Deployment

1. Visit your frontend URL
2. The application should load and be able to connect to the backend API
3. Test all functionality:
   - Navigate between pages
   - Submit the contact form
   - View team members and events
   - Test dark mode toggle

## Troubleshooting

### CORS Issues
If you experience CORS issues, check:
- That the `FRONTEND_URL` environment variable on your backend deployment matches the actual URL of your frontend
- That the `VITE_API_BASE_URL` environment variable on your frontend matches the URL of your deployed backend

### 404 Errors on Page Reload
If you get 404 errors when refreshing routes, make sure:
- The `vercel.json` file in frontend includes the rewrite rule to redirect all routes to `index.html`

### API Connection Issues
If the frontend can't connect to the backend, check:
- That the `VITE_API_BASE_URL` is correctly set
- That the backend is properly deployed and running
- That there are no CORS issues by checking the browser's developer console

## Maintenance

### Updates and Redeployments
- Vercel automatically redeploys your application when changes are pushed to the connected Git repository
- You can also manually trigger deployments from the Vercel dashboard

### Monitoring
- Vercel provides basic monitoring for your deployments
- Check the "Deployments" tab in your Vercel dashboard to view logs and deployment status 