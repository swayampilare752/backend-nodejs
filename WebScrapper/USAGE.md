# 🏏 IPL Stats Dashboard - Quick Start Guide

## 🚀 Current Status
✅ **Server is running on http://localhost:3000**

## 📋 Quick Commands

### Start the Dashboard
```bash
npm start
# or
npm run serve
```

### Scrape IPL Data
```bash
npm run scrape
```

### Check Server Status
```bash
curl http://localhost:3000/api/status
```

## 🌐 Access the Dashboard

Open your web browser and go to: **http://localhost:3000**

## 📊 First Time Setup

1. **Option A - Web Interface:**
   - Click "Scrape New Data" button on the dashboard
   - Wait for scraping to complete (5-10 minutes)

2. **Option B - Command Line:**
   ```bash
   npm run scrape
   ```
   Then refresh the dashboard and click "Load Data"

## 🎯 What You'll See

- **Interactive Charts**: Bar charts for each statistic category
- **Season Filters**: Dropdown to switch between 2020-2024 seasons
- **Stats Overview**: Quick summary cards with totals
- **Responsive Design**: Works on desktop and mobile

## 📈 Data Categories

1. 🏆 **Orange Cap Contenders** - Most runs per season
2. 🏏 **Most Fours** - Players with most boundary fours
3. 🚀 **Most Sixes** - Players with most sixes
4. 💯 **Most Centuries** - Players with most 100+ scores
5. 🎯 **Most Fifties** - Players with most 50+ scores

## 🔧 API Endpoints

- `GET /api/data` - Get all scraped data
- `POST /api/scrape` - Start scraping process
- `GET /api/status` - Server health check
- `GET /api/data/runs` - Get runs data only
- `GET /api/data/fours` - Get fours data only
- `GET /api/data/sixes` - Get sixes data only
- `GET /api/data/centuries` - Get centuries data only
- `GET /api/data/fifties` - Get fifties data only

## 🛠️ Troubleshooting

### Server won't start
```bash
# Kill existing processes
pkill -f "node server.js"
# Restart
npm start
```

### No data showing
```bash
# Run scraper manually
npm run scrape
# Then reload dashboard
```

### Port conflicts
```bash
# Change port and restart
PORT=3001 npm start
```

## 📁 Key Files

- `server.js` - Express server
- `iplScraper.js` - Web scraping logic
- `public/index.html` - Dashboard UI
- `public/app.js` - Frontend JavaScript
- `ipl_data.json` - Scraped data (auto-generated)

## 🎉 Enjoy Your IPL Dashboard!

The dashboard is now ready to use. Happy analyzing! 🏏📊