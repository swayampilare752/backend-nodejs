const express = require('express');
const app = express();
const PORT = 8080;

// Logging Middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });

  next();
});

// Sample Routes
app.get('/', (req, res) => {
  res.send('Hello, this is the home route!');
});

app.get('/about', (req, res) => {
  res.send('This is the about route!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
