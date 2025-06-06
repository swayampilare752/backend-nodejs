// index.js

const express = require('express');
const requestLogger = require('./logger');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Global middleware
app.use(requestLogger);             // Custom Logger
app.use(morgan('dev'));            // Morgan Logger (optional advanced logging)

app.get('/', (req, res) => {
    res.send('Hello from the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Developer: Swayam Pilare ✅");
});
