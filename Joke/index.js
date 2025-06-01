const express = require('express');
const axios = require('axios');
const app = express();


// Middleware to parse JSON requests
app.use(express.json());

// Sample in-memory jokes array as fallback
const localJokes = [
    { id: 1, setup: "Why don't programmers prefer dark mode?", punchline: "Because the light attracts bugs." },
    { id: 2, setup: "Why did the scarecrow become a coder?", punchline: "Because he was outstanding in his field!" },
    { id: 3, setup: "Why don't JavaScript developers go on vacation?", punchline: "Because they would get called back." }
];

// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Random Jokes API!' });
});

// Random joke endpoint
app.get('/api/jokes/random', async (req, res) => {
    try {
        // Try to fetch from external API
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const { setup, punchline } = response.data;
        res.json({ setup, punchline });
    } catch (error) {
        // Fallback to local jokes if external API fails
        console.error('Error fetching from external API:', error.message);
        const randomJoke = localJokes[Math.floor(Math.random() * localJokes.length)];
        res.json(randomJoke);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(8080, () => console.log("Server is Running at Port 8080"));