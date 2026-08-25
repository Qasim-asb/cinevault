# CineVault

CineVault is a full-stack movie discovery and watchlist application built with React and Node.js.

Users can browse movies, search for movies, view movie details, create an account, log in, and manage their personal watchlist.

The application uses the TMDB API as the external movie data source and MongoDB for user and watchlist data.

---

## Features

### Movie Discovery

- Browse movies
- Paginated movie results
- Search movies
- View movie details
- Display movie posters
- Display movie ratings
- Display movie descriptions
- Display release dates
- Display movie genres
- TMDB-powered movie data

### Authentication

- User signup
- User login
- JWT-based authentication
- Protected routes
- Current-user authentication
- Password hashing with bcrypt
- Bearer token authentication

### Watchlist

- Add movies to a personal watchlist
- Remove movies from the watchlist
- Check whether a movie is already in the watchlist
- View the authenticated user's watchlist
- Protected watchlist API routes

### Frontend

- React
- Vite
- React Router
- TanStack Query
- Axios
- Context API
- Responsive UI
- Movie cards
- Movie rows
- Movie details
- Trailer modal
- Protected routes
- Search
- Debounced search
- Scroll-to-top behavior

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- Axios
- CORS
- dotenv
- Nodemon
- Graceful server shutdown

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- TanStack Query
- Axios
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- Axios
- CORS
- dotenv
- Nodemon

### External Services

- TMDB API
- MongoDB Atlas

---

## Project Structure

cinevault/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── ScrollToTop.jsx
│   │   │   │
│   │   │   └── movie/
│   │   │       ├── MovieCard.jsx
│   │   │       ├── MovieRow.jsx
│   │   │       └── TrailerModal.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   ├── AuthContext.jsx
│   │   │   ├── WatchlistContext.js
│   │   │   └── WatchlistContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useAuthMutations.js
│   │   │   ├── useDebounce.js
│   │   │   ├── useMovie.js
│   │   │   ├── useMovies.js
│   │   │   ├── useSearchMovies.js
│   │   │   └── useWatchlist.js
│   │   │
│   │   ├── lib/
│   │   │   └── axios.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Watchlist.jsx
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── movieService.js
│   │   │   └── watchlistService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── movieController.js
│   │   │   └── watchlistController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── notFound.js
│   │   │
│   │   ├── models/
│   │   │   ├── userModel.js
│   │   │   └── watchlistModel.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── movieRoutes.js
│   │   │   └── watchlistRoutes.js
│   │   │
│   │   └── services/
│   │       └── tmdbService.js
│   │
│   ├── index.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md

---

## Backend Architecture

The backend separates the Express application from the server startup process.

### server/index.js

`index.js` creates and configures the Express application.

Responsibilities:

- Load environment variables
- Create the Express application
- Configure CORS
- Configure JSON request parsing
- Provide the health-check endpoint
- Register API routes
- Register the 404 middleware
- Register the global error handler
- Export the Express application

### server/server.js

`server.js` is responsible for starting the application.

Responsibilities:

- Import the Express application
- Connect to MongoDB
- Start the HTTP server
- Handle graceful shutdown
- Handle SIGINT
- Handle SIGTERM
- Handle uncaught exceptions
- Handle unhandled promise rejections

This separation keeps application configuration independent from server startup.

---

## API

The backend API is available under:

/api

---

## Health Check

### GET /api/health

Returns the current API status.

Example response:

{
  "success": true,
  "message": "CineVault API is running"
}

---

## Movie API

### GET /api/movies

Returns movies from TMDB.

Optional pagination:

/api/movies?page=1

### GET /api/movies/:id

Returns information for a specific movie.

Example:

/api/movies/550

### GET /api/movies/search

Searches for movies.

Example:

/api/movies/search?query=batman

Optional pagination:

/api/movies/search?query=batman&page=1

The frontend communicates with the CineVault backend rather than directly with TMDB.

---

## Authentication API

### POST /api/auth/signup

Creates a new user account.

Example request:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

### POST /api/auth/login

Authenticates an existing user.

Example request:

{
  "email": "john@example.com",
  "password": "password123"
}

### GET /api/auth/me

Returns the currently authenticated user.

This endpoint requires a valid JWT.

Authentication header:

Authorization: Bearer <token>

---

## Watchlist API

All watchlist endpoints require authentication.

### GET /api/watchlist

Returns the authenticated user's watchlist.

### POST /api/watchlist

Adds a movie to the authenticated user's watchlist.

Example request:

{
  "id": 550,
  "title": "Fight Club",
  "year": "1999",
  "rating": 8.4,
  "genres": [],
  "image": "https://image.tmdb.org/t/p/w500/example.jpg",
  "description": "A movie description."
}

### DELETE /api/watchlist/:movieId

Removes a movie from the authenticated user's watchlist.

Example:

/api/watchlist/550

---

## Environment Variables

The backend requires environment variables.

Create the following file:

server/.env

Example:

PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_v3_api_key

Do not commit `.env` to Git.

Environment files are ignored by the root `.gitignore`.

---

## Getting Started

### Requirements

Install the following before running CineVault:

- Node.js
- npm
- Git
- MongoDB or MongoDB Atlas

A TMDB API key is also required.

---

## Clone the Repository

git clone https://github.com/Qasim-asb/cinevault.git

cd cinevault

---

# Backend Setup

Open a terminal in the project root and run:

cd server

Install dependencies:

npm install

Create:

server/.env

Add:

PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_v3_api_key

Start the development server:

npm run dev

Start the production server:

npm start

The backend runs by default at:

http://localhost:5000

Health check:

http://localhost:5000/api/health

---

# Frontend Setup

Open another terminal.

From the project root:

cd client

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend normally runs at:

http://localhost:5173

---

## Frontend API Configuration

The frontend communicates with the backend through Axios.

The Axios configuration is located at:

client/src/lib/axios.js

For local development, the backend API base URL is:

http://localhost:5000/api

For production, the API base URL should be configured through a Vite environment variable.

Example:

VITE_API_BASE_URL=https://your-api-domain.com/api

Then the Axios instance can use:

import.meta.env.VITE_API_BASE_URL

---

## Authentication Flow

CineVault currently uses JWT authentication.

The authentication flow is:

User
↓
Login / Signup
↓
CineVault API
↓
Auth Controller
↓
MongoDB
↓
JWT generated
↓
Frontend
↓
Authorization: Bearer <token>
↓
Auth Middleware
↓
Protected API

The backend verifies the JWT using the `JWT_SECRET` environment variable.

---

## Movie Data Flow

The movie data flow is:

React
↓
Axios
↓
CineVault API
↓
Movie Controller
↓
TMDB Service
↓
TMDB API
↓
CineVault API
↓
React

The TMDB API key remains on the backend and is not exposed to the frontend.

---

## Watchlist Data Flow

The watchlist data flow is:

React
↓
Axios + JWT
↓
CineVault Watchlist API
↓
Auth Middleware
↓
Watchlist Controller
↓
MongoDB
↓
React

---

## TanStack Query

The frontend uses TanStack Query for server-state management.

It is used for:

- Movie queries
- Movie details
- Movie searches
- Authentication state
- Watchlist data
- Mutations
- Query caching
- Query invalidation
- Refetching
- Loading states
- Error states

---

## Axios

The frontend uses a shared Axios instance.

Axios is responsible for communicating with the CineVault backend API.

It can be configured with:

- Base URL
- Request timeout
- Authorization header
- Response handling

---

## Database

CineVault uses MongoDB with Mongoose.

Database configuration:

server/src/config/db.js

The database name is:

CineVault

The MongoDB connection uses:

serverSelectionTimeoutMS: 5000

MongoDB connection lifecycle events are handled for:

- connected
- error
- disconnected

The application also provides a `disconnectDB()` function for graceful shutdown.

---

## Graceful Shutdown

The backend supports graceful shutdown.

Handled signals:

- SIGINT
- SIGTERM

Shutdown sequence:

Shutdown signal
↓
Stop accepting new HTTP connections
↓
Close HTTP server
↓
Close MongoDB connection
↓
Terminate process

The backend also handles:

- uncaughtException
- unhandledRejection

The purpose of graceful shutdown is to prevent the application from terminating while active connections are still being handled.

---

## Error Handling

The backend uses centralized error-handling middleware.

### notFound.js

Handles requests to API routes that do not exist.

Example response:

{
  "success": false,
  "message": "Route not found: GET /api/unknown"
}

### errorHandler.js

Handles errors passed through Express middleware.

Example response:

{
  "success": false,
  "message": "Something went wrong"
}

---

## CORS

The backend uses the Express CORS middleware.

The allowed frontend origin is configured through:

CLIENT_URL

Example:

CLIENT_URL=http://localhost:5173

---

## JSON Request Limit

The Express application accepts JSON request bodies up to 10 KB.

This is configured with:

express.json({ limit: '10kb' })

This prevents unnecessarily large JSON request bodies from being processed.

---

## Git Workflow

The repository uses Git for version control.

The main branch is:

main

Feature development can be done on separate branches.

Create a new branch:

git checkout -b feature-name

Check the current state:

git status

Stage changes:

git add .

Commit changes:

git commit -m "feat: description"

Push a new branch:

git push -u origin feature-name

After the feature is complete, merge the branch into `main`.

---

## Development Commands

### Backend

From the `server` directory:

npm run dev

Runs the backend using Nodemon.

npm start

Runs the backend using Node.js.

### Frontend

From the `client` directory:

npm run dev

Runs the Vite development server.

---

## Security

Never commit sensitive environment variables.

Do not commit:

.env
.env.*
MongoDB connection strings
JWT secrets
TMDB API keys

The root `.gitignore` is configured to ignore environment files while allowing `.env.example` files.

The TMDB API key is kept on the backend and should never be exposed through frontend environment variables.

---

## Current Authentication Architecture

CineVault currently uses:

JWT
+
Authorization: Bearer <token>

The backend protects private endpoints with `authMiddleware.js`.

The middleware:

1. Reads the Authorization header.
2. Checks for the `Bearer` scheme.
3. Extracts the token.
4. Verifies the token with `JWT_SECRET`.
5. Finds the corresponding user.
6. Attaches the user to `req.user`.
7. Allows the request to continue.

Invalid or expired tokens return HTTP 401.

---

## Future Authentication Improvements

A future improvement could migrate authentication from Bearer tokens stored on the frontend to HTTP-only cookies.

That architecture would use:

- HTTP-only cookies
- Secure cookies in production
- SameSite configuration
- CORS credentials
- Cookie-based authentication

This should be implemented as a coordinated frontend and backend change rather than changing only the CORS configuration.

---

## Future Improvements

Possible future improvements include:

- HTTP-only cookie authentication
- Refresh-token authentication
- Request validation
- Rate limiting
- Request logging
- Automated tests
- API integration tests
- Frontend component tests
- Production API configuration
- Improved production error handling
- Movie filtering
- Genre-based browsing
- Movie sorting
- Advanced search
- User profile
- User preferences
- Improved accessibility
- Loading skeletons
- Pagination improvements
- Production deployment configuration

---

## License

This project is currently licensed under the ISC License as specified in the backend package configuration.

---

## Author

CineVault

A full-stack movie discovery and personal watchlist application.
