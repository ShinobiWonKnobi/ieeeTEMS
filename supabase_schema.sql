-- Supabase Schema Setup for IEEE TEMS Website

-- Enable UUID generation extension if not already enabled
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Images Table
-- Stores image data (e.g., base64 or URLs) used across the site
CREATE TABLE public.images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  image TEXT NOT NULL -- Store base64 data or image URL/path
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access to images" 
ON public.images 
FOR SELECT USING (true);

-- Optional: Policy: Allow authenticated users (e.g., admins) to insert/update/delete
-- CREATE POLICY "Allow admin full access" 
-- ON public.images
-- FOR ALL USING (auth.role() = 'authenticated') -- Adjust role/condition as needed
-- WITH CHECK (auth.role() = 'authenticated');


-- 2. Team Members Table
-- Stores information about the team members
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  role TEXT,
  image TEXT, -- URL or path to the member's image
  bio TEXT,
  twitter TEXT,
  linkedin TEXT,
  website TEXT,
  github TEXT
);

-- Enable RLS
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access to team members" 
ON public.team_members 
FOR SELECT USING (true);


-- 3. Events Table
-- Stores details about past and upcoming events
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMPTZ,
  time TEXT,
  location TEXT,
  image_url TEXT,
  category TEXT, -- e.g., 'Workshop', 'Conference', 'Networking'
  is_featured BOOLEAN DEFAULT false
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access to events" 
ON public.events 
FOR SELECT USING (true);


-- 4. Contact Submissions Table
-- Stores messages submitted through the contact form
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false -- Optional: for tracking if an admin has read it
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (submit the form)
CREATE POLICY "Allow public insert access for contact form" 
ON public.contact_submissions 
FOR INSERT WITH CHECK (true);

-- Optional: Policy: Allow admins/authenticated users to read/update/delete
-- CREATE POLICY "Allow admin read/update/delete access" 
-- ON public.contact_submissions 
-- FOR ALL USING (auth.role() = 'authenticated') -- Adjust role/condition as needed
-- WITH CHECK (auth.role() = 'authenticated');


-- Note:
-- You should run these queries in the Supabase SQL Editor.
-- Review and adjust column types, constraints (NOT NULL, UNIQUE), and RLS policies based on your specific requirements.
-- Consider adding indexes to frequently queried columns for performance (e.g., events.date, images.name). 