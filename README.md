# Backlogger

A full-stack application for managing your gaming backlog. Track games, organize your collection, and never lose track of what you want to play.

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast build tooling
- **Redux Toolkit** for state management
- **Redux-Saga** for side effects
- **TailwindCSS** for styling
- **Axios** for HTTP requests
- **React Router** for navigation

### Backend
- **Node.js** with Express.js
- **PostgreSQL** for database
- **CORS** enabled for cross-origin requests

### Testing
- **Playwright** for end-to-end testing

## Project Structure

```
backlogger/
├── client/                 # React frontend application
│   ├── components/        # React components (Card, Header, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── redux/            # Redux store, reducers, and sagas
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── vite.config.ts    # Vite configuration
├── server/               # Express.js backend
│   ├── routes/           # API route handlers (games, users)
│   ├── modules/          # Database connection pool
│   ├── database.sql      # Database schema
│   └── server.js         # Express server entry point
├── tests/                # Playwright end-to-end tests
└── package.json          # Root workspace configuration
```

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database
- pgAdmin4 (optional, for database management)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backlogger
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install && cd ..
   cd server && npm install && cd ..
   ```

3. **Set up environment variables**
   Create a `.env` file in the `server` directory:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/backlogger
   PORT=3000
   ```

4. **Set up the database**
   ```bash
   psql -U postgres -d backlogger -f server/database.sql
   ```

## Running the Project

### Development Mode

**Backend (Terminal 1):**
```bash
cd server
npm start
```
The server will run on `http://localhost:3000`

**Frontend (Terminal 2):**
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Build

**Frontend:**
```bash
cd client
npm run build
```

**Backend:**
```bash
cd server
npm start
```

## Available Scripts

### Frontend (`client/` directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend (`server/` directory)
- `npm start` - Start server with nodemon (auto-reload on changes)
- `npm run lint` - Run ESLint

### Root
- `npm run test` - Run Playwright tests

## API Endpoints

### Games
- `GET /api/games` - Get all games
- `POST /api/games` - Create a new game
- `PUT /api/games/:id` - Update a game
- `DELETE /api/games/:id` - Delete a game

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

## Testing

Run end-to-end tests with Playwright:

```bash
npm run test
```

View test results:
```bash
npx playwright show-report
```

## Database Management

View and manage the database with pgAdmin4:
- Access pgAdmin4 at `http://localhost:5050`
- Default port: 5432

Or use the PostgreSQL CLI:
```bash
psql -U postgres -d backlogger
```

## Development Notes

- The frontend uses Redux for state management with Redux-Saga for async operations
- The backend is a lightweight Express.js API with PostgreSQL integration
- The project uses ESLint for code quality
- Prettier is configured for code formatting

