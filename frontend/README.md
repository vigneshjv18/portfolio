# Portfolio Frontend

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running the Application

#### Option 1: Using npm (if PowerShell execution policy allows)
```bash
npm run dev
```

#### Option 2: Direct Node execution (bypasses PowerShell restrictions)
```bash
node node_modules/vite/bin/vite.js
```

The application will start on **http://localhost:5173**

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

## Backend Integration

This frontend connects to a FastAPI backend running on **http://localhost:8005**

Make sure the backend server is running before starting the frontend.

## Content Management

Portfolio content is managed through the backend's `content.json` file located at:
```
../backend/content.json
```

Edit this file to update:
- Profile information
- Skills and experience
- Education and certifications
- Contact details
