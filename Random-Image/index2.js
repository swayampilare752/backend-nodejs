const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

// Home route
app.get('/', (req, res) => {
    res.send('🎉 Welcome to the Random Image API');
});

// Random image route
app.get('/api/image/random', (req, res) => {
    const randomSig = Math.floor(Math.random() * 10000); // Different signature every time
    const imageUrl = `https://source.unsplash.com/random/800x600?sig=${randomSig}`;
    
    // Redirect to Unsplash image (forces browser to load fresh image)
    res.redirect(imageUrl);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
