# Complaint Management System - Client

This is the React frontend for the Complaint Management System with authentication features.

## Features

- **Authentication System**: Login and signup with JWT tokens
- **Protected Routes**: Automatic redirects for unauthenticated users
- **Responsive Design**: Works on desktop and mobile devices
- **Multi-language Support**: English and Nepali
- **Dark/Light Mode**: Toggle between themes

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the client directory:

```env
VITE_API_URL=http://localhost:5000
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Authentication Flow

1. **Login Page**: Users can sign in with email and password
2. **Signup Page**: New users can create an account
3. **Protected Routes**: The `/form` route requires authentication
4. **Automatic Redirects**: 
   - Unauthenticated users are redirected to `/login`
   - Authenticated users are redirected to `/` after login/signup
5. **Logout**: Users can logout from the navbar

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with auth state
│   ├── ProtectedRoute.jsx  # Route protection component
│   └── ...
├── context/
│   └── AuthContext.jsx     # Authentication state management
├── pages/
│   ├── auth/
│   │   ├── LoginPage.jsx   # Combined login/signup page
│   │   └── SignupPage.jsx  # Separate signup page
│   └── ...
├── services/
│   └── api.js             # API configuration
└── ...
```

## Backend Requirements

Make sure your backend server is running on port 5000 with the following endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user info

## Usage

1. Start the backend server first
2. Start the frontend development server
3. Navigate to the application
4. Use the login/signup functionality
5. Access protected routes after authentication

## Styling

The authentication pages use custom CSS with:
- Gradient backgrounds
- Smooth animations
- Responsive design
- Modern UI components
