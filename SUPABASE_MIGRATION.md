# MongoDB to Supabase Migration Documentation

This document outlines the migration process from MongoDB to Supabase as the backend database for the IEEE TEMS website.

## Overview

The website has been refactored to use Supabase instead of MongoDB for data storage. This change provides several benefits:

- Simplified database management
- Built-in authentication
- Real-time capabilities
- Row-level security
- SQL-based querying

## Database Schema

The database schema has been defined in `supabase_schema.sql` and includes the following tables:

1. **images** - For storing image data
   - `id`: UUID (Primary Key)
   - `created_at`: Timestamp
   - `name`: Text
   - `image`: Text (URL or base64 string)

2. **team_members** - For storing team member information
   - `id`: UUID (Primary Key)
   - `created_at`: Timestamp
   - `name`: Text
   - `role`: Text
   - `image`: Text (URL)
   - `bio`: Text
   - `twitter`: Text
   - `linkedin`: Text
   - `website`: Text
   - `github`: Text

3. **events** - For storing event information
   - `id`: UUID (Primary Key)
   - `created_at`: Timestamp
   - `title`: Text
   - `description`: Text
   - `date`: Timestamp
   - `time`: Text
   - `location`: Text
   - `image_url`: Text
   - `category`: Text
   - `is_featured`: Boolean

4. **contact_submissions** - For storing contact form submissions
   - `id`: UUID (Primary Key)
   - `created_at`: Timestamp
   - `name`: Text
   - `email`: Text
   - `subject`: Text
   - `message`: Text
   - `is_read`: Boolean

## Security

Row Level Security (RLS) has been implemented on all tables:
- Public read access to images, team members, and events
- Public insert access to contact_submissions
- Admin-only write access to images, team members, and events

## API Endpoints

### Images
- GET `/images/name/:name` - Get images by name
- GET `/images/:id` - Get image by ID

### Team Members
- GET `/team_members` - Get all team members
- POST `/team_members` - Create a new team member
- PUT `/team_members/:id` - Update a team member
- DELETE `/team_members/:id` - Delete a team member

### Events
- GET `/events` - Get all events
- POST `/events` - Create a new event
- PUT `/events/:id` - Update an event
- DELETE `/events/:id` - Delete an event

### Contact Submissions
- GET `/contact_submissions` - Get all contact submissions
- POST `/contact_submissions` - Create a new contact submission
- PUT `/contact_submissions/:id` - Update a contact submission
- DELETE `/contact_submissions/:id` - Delete a contact submission

## Frontend Integration

Frontend services have been updated to work with the new API endpoints:

- Added API service functions in `frontend/src/services/api.js`
- Added React Query hooks in `frontend/src/hooks/useApi.js`

## Setup Steps

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase_schema.sql` in the SQL Editor of your Supabase project
3. Update the environment variables in your `.env` file:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Restart the backend server

## Future Enhancements

- Implement file storage using Supabase Storage
- Add authentication for admin areas
- Set up real-time subscriptions for immediate data updates 