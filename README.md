# VRPI Group Platform

This project is a complete FULL STACK web application containing a User Frontend, an Admin Frontend, and a Node/Express Backend.

## 1. Backend Setup

The backend handles the APIs, database connection to PostgreSQL, and Knex migrations/seeds.

### Steps to run:
1. Ensure your PostgreSQL database `vrpi_db` is running (or create it manually).
2. The `.env` file is located at `backend/.env` with your DB credentials.
3. Open a terminal and navigate to the `backend/` directory.
4. Run migrations and seeds (already done by the setup, but for reference):
   ```bash
   npx knex migrate:latest
   npx knex seed:run
   ```
5. Start the backend development server:
   ```bash
   npx nodemon server.js
   ```
   *The backend will run on `http://localhost:5000`.*

---

## 2. User Frontend Setup

This is the public-facing React application.

### Steps to run:
1. Open a new terminal and navigate to the `user-frontend/` directory.
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The user frontend will run (usually) on `http://localhost:5173`.*

---

## 3. Admin Frontend Setup

This is the separate React dashboard for admin users.

### Steps to run:
1. Open a new terminal and navigate to the `admin-frontend/` directory.
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The admin frontend will run on a different port (e.g., `http://localhost:5174`).*

### Admin Credentials
You can log into the Admin Dashboard using the seeded user:
- **Email:** `admin@vrpi.com`
- **Password:** `admin123`
