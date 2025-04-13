# IEEE TEMS Website

A modern, responsive website for the IEEE Technology and Engineering Management Society (TEMS).

## Features

- Responsive design built with React and Tailwind CSS
- Smooth animations with Framer Motion
- Dark mode support
- Backend API built with Express.js
- Supabase integration for database storage

## Tech Stack

### Frontend
- **React** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching
- **Axios** - HTTP client

### Backend
- **Express.js** - Web framework
- **Supabase** - Database platform 

## Project Structure

```
/
├── backend/             # Backend API with Express
│   ├── config/          # Configuration files
│   └── server.js        # Main server file
├── frontend/            # React frontend
│   ├── public/          # Static assets
│   └── src/             # Source code
│       ├── components/  # Reusable UI components
│       ├── hooks/       # Custom React hooks
│       ├── pages/       # Page components
│       └── services/    # API services
└── supabase_schema.sql  # Supabase schema definition
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd ieee-tems-website
   ```

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Create a `.env` file in the backend directory

   ```
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Set up the Supabase database
   - Create a new project on [supabase.com](https://supabase.com)
   - Run the SQL queries in `supabase_schema.sql` in the SQL Editor

### Running the Application

1. Start the backend server
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server
   ```bash
   cd frontend
   npm run dev
   ```

3. Access the application at http://localhost:5173

## API Endpoints

See [SUPABASE_MIGRATION.md](./SUPABASE_MIGRATION.md) for a full list of available API endpoints.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- IEEE TEMS for inspiration
- All the contributors who have helped with this project 