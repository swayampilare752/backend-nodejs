import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import IPLScraper from './iplScraper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Global scraper instance
let scraper = new IPLScraper();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get IPL data
app.get('/api/data', async (req, res) => {
    try {
        // Try to load existing data first
        const existingData = await scraper.loadData();
        
        if (existingData && Object.keys(existingData.orangeCapRunners).length > 0) {
            res.json(existingData);
        } else {
            res.json({ 
                message: 'No data available. Please scrape data first.',
                data: null 
            });
        }
    } catch (error) {
        console.error('Error getting data:', error);
        res.status(500).json({ error: 'Failed to get data' });
    }
});

// API endpoint to trigger data scraping
app.post('/api/scrape', async (req, res) => {
    try {
        console.log('Starting IPL data scraping...');
        res.json({ message: 'Scraping started. This may take several minutes...' });
        
        // Start scraping in background
        scraper.scrapeAllData()
            .then(data => {
                scraper.saveData();
                console.log('Scraping completed and data saved!');
            })
            .catch(error => {
                console.error('Scraping failed:', error);
            });
            
    } catch (error) {
        console.error('Error starting scraping:', error);
        res.status(500).json({ error: 'Failed to start scraping' });
    }
});

// API endpoint to check scraping status
app.get('/api/status', (req, res) => {
    // This is a simple implementation - in a real app you'd want to track actual status
    res.json({ 
        status: 'ready',
        message: 'Server is running' 
    });
});

// API endpoint to get specific category data
app.get('/api/data/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const data = await scraper.loadData();
        
        if (!data) {
            return res.status(404).json({ error: 'No data available' });
        }
        
        const categoryMap = {
            'runs': 'orangeCapRunners',
            'fours': 'mostFours', 
            'sixes': 'mostSixes',
            'centuries': 'mostCenturies',
            'fifties': 'mostFifties'
        };
        
        const dataKey = categoryMap[category];
        if (!dataKey || !data[dataKey]) {
            return res.status(404).json({ error: 'Category not found' });
        }
        
        res.json(data[dataKey]);
    } catch (error) {
        console.error('Error getting category data:', error);
        res.status(500).json({ error: 'Failed to get category data' });
    }
});

app.listen(PORT, () => {
    console.log(`IPL Stats Dashboard server running on http://localhost:${PORT}`);
    console.log('Access the dashboard at http://localhost:3000');
    console.log('API endpoints:');
    console.log('  GET /api/data - Get all scraped data');
    console.log('  POST /api/scrape - Start data scraping');
    console.log('  GET /api/status - Check server status');
    console.log('  GET /api/data/:category - Get specific category data');
});

export default app;