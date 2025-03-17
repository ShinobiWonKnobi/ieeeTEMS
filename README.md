# IEEE TEMS Website

<div align="center">
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![Issues](https://img.shields.io/github/issues/ShinobiWonKnobi/IEEE_TEMS)](https://github.com/ShinobiWonKnobi/IEEE_TEMS/issues)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ShinobiWonKnobi/IEEE_TEMS/pulls)
  
</div>

A modern, responsive web application built for the IEEE Technology & Engineering Management Society (TEMS) chapter at SRM Institute of Science and Technology. This project serves as the official web presence for the TEMS chapter, showcasing events, team members, and chapter activities.

## 📸 Screenshots

<div align="center">
  <i>Coming soon</i>
</div>

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Clean interface with smooth animations powered by Framer Motion
- **Event Management** - Display and filter upcoming and past events
- **Team Showcase** - Highlight chapter officers and members
- **Contact Form** - Get in touch with form validation
- **Dynamic Content** - Fetch and update content through the backend API

## 🛠️ Tech Stack

### Frontend
- **React 19** - Built with the latest React version
- **Vite** - Lightning-fast build tooling
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management
- **Framer Motion** - Animations and transitions
- **Tailwind CSS** - Utility-first styling approach
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites

- Node.js v16+ 
- npm or yarn
- MongoDB (local or Atlas)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShinobiWonKnobi/IEEE_TEMS.git
   cd IEEE_TEMS
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

3. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend && npm install
   ```

4. **Start development servers**
   ```bash
   # Start both backend and frontend concurrently
   npm run dev:all
   
   # Or start them separately:
   # Terminal 1 - Backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
├── backend/                # Backend server code
│   ├── config/             # Configuration files
│   ├── models/             # Database models
│   └── server.js           # Express server
│
└── frontend/               # Frontend React application
    ├── public/             # Static files
    └── src/                # Source code
        ├── assets/         # Images, fonts, etc.
        ├── components/     # Reusable components
        ├── context/        # React context providers
        ├── hooks/          # Custom React hooks
        ├── layouts/        # Layout components
        ├── pages/          # Page components
        ├── services/       # API services
        └── utils/          # Utility functions
```

## 🔄 Workflow

The project follows a feature-branch workflow:

1. Create a branch for your feature: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -m "Add feature XYZ"`
3. Push your branch: `git push origin feature/your-feature`
4. Open a Pull Request on GitHub

## 🧪 UI Guidelines

The project has established UI guidelines to maintain consistency. Please refer to `frontend/UI-GUIDELINES.md` for details on:

- Color palette
- Typography
- Component styling
- Best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

<a href="https://github.com/ShinobiWonKnobi/IEEE_TEMS/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ShinobiWonKnobi/IEEE_TEMS" />
</a>

## 🙏 Acknowledgements

- IEEE TEMS for their support and guidance
- SRM Institute of Science and Technology
- All contributing developers 