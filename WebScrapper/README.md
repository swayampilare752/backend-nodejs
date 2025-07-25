# 🏏 IPL Stats Dashboard

A comprehensive IPL (Indian Premier League) statistics dashboard that scrapes player data from the official IPL website and visualizes it using interactive charts.

## 📊 Features

- **Web Scraping**: Automatically scrapes IPL player statistics from https://www.iplt20.com/stats/
- **Interactive Charts**: Beautiful visualizations using Chart.js
- **Multi-Season Analysis**: Data for the last 5 seasons (2020-2024)
- **Real-time Dashboard**: Web-based dashboard with responsive design
- **Comprehensive Stats**: Tracks multiple player statistics

## 📈 Data Categories

The dashboard tracks and visualizes the following player statistics:

1. **🏆 Orange Cap Contenders** - Top 10 players with most runs in each season
2. **🏏 Most Fours** - Top 10 players who hit the most fours in each season  
3. **🚀 Most Sixes** - Top 10 players who hit the most sixes in each season
4. **💯 Most Centuries** - Top 10 players with most centuries in each season
5. **🎯 Most Fifties** - Top 10 players with most fifties in each season

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd WebScrapper
```

2. Install dependencies (already done):
```bash
npm install
```

### Usage

#### Option 1: Quick Start (Scrape + Serve)

Run the standalone scraper first:
```bash
npm run scrape
```

Then start the web server:
```bash
npm run serve
```

#### Option 2: Use Web Interface

Start the web server directly:
```bash
npm start
```

Open your browser and go to: http://localhost:3000

Use the web interface to:
- Click "Load Data" to check for existing scraped data
- Click "Scrape New Data" to fetch fresh data from IPL website

## 🖥️ Dashboard Features

### Interactive Charts
- Bar charts for each statistic category
- Season-wise filtering using dropdown selectors
- Hover tooltips showing detailed player information
- Responsive design that works on desktop and mobile

### Stats Overview
- Quick summary cards showing totals across all seasons
- Real-time updates when new data is scraped
- Player count and aggregated statistics

### User Interface
- Modern, gradient-based design
- Smooth animations and transitions
- Loading indicators during data operations
- Error handling and user feedback

## 📁 Project Structure

```
WebScrapper/
├── server.js           # Express server with API endpoints
├── iplScraper.js       # Puppeteer-based web scraper
├── scrape.js           # Standalone scraping script
├── package.json        # Project dependencies and scripts
├── ipl_data.json      # Scraped data storage (generated)
└── public/
    ├── index.html      # Main dashboard HTML
    └── app.js          # Frontend JavaScript (Chart.js)
```

## 🔧 API Endpoints

- `GET /` - Serves the main dashboard
- `GET /api/data` - Returns all scraped IPL data
- `POST /api/scrape` - Triggers background data scraping
- `GET /api/status` - Returns server status
- `GET /api/data/:category` - Returns specific category data (runs, fours, sixes, centuries, fifties)

## ⚙️ Technical Details

### Web Scraping
- **Tool**: Puppeteer (headless Chrome browser)
- **Source**: Official IPL website (https://www.iplt20.com/stats/)
- **Rate Limiting**: 2-second delays between requests to be respectful
- **Error Handling**: Graceful fallbacks for failed requests
- **Data Persistence**: JSON file storage with automatic save/load

### Frontend
- **Charts**: Chart.js library for interactive visualizations
- **Styling**: Modern CSS with gradients and animations
- **Icons**: Font Awesome for professional icons
- **Responsive**: Mobile-friendly design using CSS Grid and Flexbox

### Backend
- **Server**: Express.js with CORS support
- **File Operations**: fs-extra for enhanced file handling
- **Background Processing**: Async scraping with status polling

## 🎨 Customization

### Adding New Statistics
1. Extend the `IPLScraper` class with new scraping methods
2. Add corresponding data fields to the data structure
3. Create new chart containers in `index.html`
4. Update the frontend JavaScript to handle new chart types

### Modifying Chart Appearance
- Edit color schemes in `app.js` (colorSchemes object)
- Modify Chart.js configuration in chartConfig object
- Update CSS styles in `index.html` for visual changes

## 🚨 Important Notes

### Rate Limiting
The scraper includes deliberate delays between requests to avoid overwhelming the IPL website. Please be respectful when scraping.

### Data Accuracy
Data accuracy depends on the structure of the IPL website. If the website structure changes, the scraper may need updates.

### Browser Requirements
Puppeteer downloads Chromium automatically. For Docker or server deployments, ensure sufficient disk space and memory.

## 🐛 Troubleshooting

### Scraping Issues
- **Network errors**: Check internet connection and try again
- **Timeout errors**: The IPL website might be slow; the scraper will retry
- **Structure changes**: Website HTML might have changed; may need code updates

### Server Issues
- **Port conflicts**: Change the PORT environment variable if 3000 is occupied
- **Memory issues**: Puppeteer is memory-intensive; ensure adequate RAM

### Chart Display Issues
- **Charts not showing**: Check browser console for JavaScript errors
- **Data not loading**: Verify the API endpoints are working correctly

## 📜 License

This project is for educational purposes. Please respect the IPL website's terms of service and robots.txt when scraping data.

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

---

**Enjoy exploring IPL statistics! 🏏📊**