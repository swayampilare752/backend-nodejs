const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 8080;

const ACCESS_KEY = '4FYFVZnx7t8NO9rZo9C-0DY2ys6EKkUI5gYEhKWau8s';

app.use(cors());

// Redirect to image
app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`
            }
        });

        const imageUrl = response.data.urls?.regular;

        if (imageUrl) {
            res.redirect(imageUrl); // 👈 This makes the browser directly open the image
        } else {
            res.status(500).send('No image URL found');
        }

    } catch (error) {
        console.error('Error fetching image:', error.message);
        res.status(500).send('Failed to fetch image');
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
