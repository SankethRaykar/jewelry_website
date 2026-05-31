const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Sentry = require('@sentry/node');
const { nodeProfilingIntegration } = require('@sentry/profiling-node');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN_BACKEND,
  integrations: [
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL,
  'https://jewelry-website-omega.vercel.app',
  'http://localhost:5173'
].filter(Boolean);

app.use(cors({ 
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all temporarily for easy deployment
    }
  }, 
  credentials: true 
}));
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'BlingLux API is running' });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Import Routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
