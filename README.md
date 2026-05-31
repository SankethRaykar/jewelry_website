# Vivah Luxe | Premium Ethnic Jewellery E-Commerce

This is the fully integrated, production-ready implementation of the Vivah Luxe e-commerce platform. It features a complete port of the premium Stitch UI designs into a modern React architecture, connected to an Express backend and a Supabase database.

## Architecture

- **Frontend**: React (Vite), TailwindCSS, React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Supabase)
- **Monitoring**: Sentry (Error Tracking), PostHog (Analytics)
- **Deployment**: Vercel (Frontend), Railway (Backend)

## Features Included in the Perfect Working Model

### 1. Storefront (`/`)
- Fully animated Hero Carousel (Heirloom Series & Marwar Majesty).
- Category Navigation Grid.
- Dynamic "Trending Now" products fetched live from the backend.
- Global Slide-out Cart Drawer with Add to Cart / Checkout functionality.
- Shimmer loading effects and premium micro-interactions.

### 2. Product Detail (`/product/:id`)
- Premium high-fidelity layout for individual products.
- Integrated Add to Cart functionality.
- Full layout integration (Navigation Header, Announcement Bar, Footer).

### 3. Operations Suite (`/admin`)
- Complete Admin Dashboard layout.
- Real-time product inventory metrics.
- Visual revenue charts and dynamic Low Stock Alerts based on live inventory.
- Recent orders data table.

## Local Development

To run this project locally:

1. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

2. **Environment Variables**
   Ensure you have `.env` files configured for both frontend and backend with your Supabase credentials, Sentry DSNs, and PostHog keys.

3. **Start Development Servers**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm run dev

   # Terminal 2: Frontend
   cd frontend
   npm run dev
   ```

## Live Production Links
- **Frontend URL**: [https://jewelry-website-omega.vercel.app](https://jewelry-website-omega.vercel.app)
- **Backend Health Check**: `[Railway URL]/health`
