import puppeteer from 'puppeteer';
import fs from 'fs-extra';

class IPLScraper {
    constructor() {
        this.browser = null;
        this.page = null;
        this.baseUrl = 'https://www.iplt20.com/stats/';
        this.seasons = [2024, 2023, 2022, 2021, 2020]; // Last 5 seasons
        this.data = {
            orangeCapRunners: {},
            mostFours: {},
            mostSixes: {},
            mostCenturies: {},
            mostFifties: {}
        };
    }

    async init() {
        console.log('Initializing browser...');
        this.browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1366, height: 768 });
        
        // Set user agent to avoid blocking
        await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    }

    async scrapeRunsData(season) {
        console.log(`Scraping runs data for season ${season}...`);
        try {
            const url = `${this.baseUrl}${season}/most-runs`;
            await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            
            // Wait for the stats table to load
            await this.page.waitForSelector('.table-responsive', { timeout: 10000 });
            
            const playersData = await this.page.evaluate(() => {
                const rows = document.querySelectorAll('.table-responsive tbody tr');
                const players = [];
                
                for (let i = 0; i < Math.min(10, rows.length); i++) {
                    const row = rows[i];
                    const cells = row.querySelectorAll('td');
                    
                    if (cells.length >= 4) {
                        const playerName = cells[1]?.textContent?.trim() || '';
                        const team = cells[2]?.textContent?.trim() || '';
                        const runs = parseInt(cells[3]?.textContent?.trim() || '0');
                        
                        players.push({
                            rank: i + 1,
                            name: playerName,
                            team: team,
                            runs: runs
                        });
                    }
                }
                return players;
            });
            
            return playersData;
        } catch (error) {
            console.error(`Error scraping runs data for ${season}:`, error);
            return [];
        }
    }

    async scrapeFoursData(season) {
        console.log(`Scraping fours data for season ${season}...`);
        try {
            const url = `${this.baseUrl}${season}/most-fours`;
            await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            
            await this.page.waitForSelector('.table-responsive', { timeout: 10000 });
            
            const playersData = await this.page.evaluate(() => {
                const rows = document.querySelectorAll('.table-responsive tbody tr');
                const players = [];
                
                for (let i = 0; i < Math.min(10, rows.length); i++) {
                    const row = rows[i];
                    const cells = row.querySelectorAll('td');
                    
                    if (cells.length >= 4) {
                        const playerName = cells[1]?.textContent?.trim() || '';
                        const team = cells[2]?.textContent?.trim() || '';
                        const fours = parseInt(cells[3]?.textContent?.trim() || '0');
                        
                        players.push({
                            rank: i + 1,
                            name: playerName,
                            team: team,
                            fours: fours
                        });
                    }
                }
                return players;
            });
            
            return playersData;
        } catch (error) {
            console.error(`Error scraping fours data for ${season}:`, error);
            return [];
        }
    }

    async scrapeSixesData(season) {
        console.log(`Scraping sixes data for season ${season}...`);
        try {
            const url = `${this.baseUrl}${season}/most-sixes`;
            await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            
            await this.page.waitForSelector('.table-responsive', { timeout: 10000 });
            
            const playersData = await this.page.evaluate(() => {
                const rows = document.querySelectorAll('.table-responsive tbody tr');
                const players = [];
                
                for (let i = 0; i < Math.min(10, rows.length); i++) {
                    const row = rows[i];
                    const cells = row.querySelectorAll('td');
                    
                    if (cells.length >= 4) {
                        const playerName = cells[1]?.textContent?.trim() || '';
                        const team = cells[2]?.textContent?.trim() || '';
                        const sixes = parseInt(cells[3]?.textContent?.trim() || '0');
                        
                        players.push({
                            rank: i + 1,
                            name: playerName,
                            team: team,
                            sixes: sixes
                        });
                    }
                }
                return players;
            });
            
            return playersData;
        } catch (error) {
            console.error(`Error scraping sixes data for ${season}:`, error);
            return [];
        }
    }

    async scrapeCenturiesData(season) {
        console.log(`Scraping centuries data for season ${season}...`);
        try {
            const url = `${this.baseUrl}${season}/most-hundreds`;
            await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            
            await this.page.waitForSelector('.table-responsive', { timeout: 10000 });
            
            const playersData = await this.page.evaluate(() => {
                const rows = document.querySelectorAll('.table-responsive tbody tr');
                const players = [];
                
                for (let i = 0; i < Math.min(10, rows.length); i++) {
                    const row = rows[i];
                    const cells = row.querySelectorAll('td');
                    
                    if (cells.length >= 4) {
                        const playerName = cells[1]?.textContent?.trim() || '';
                        const team = cells[2]?.textContent?.trim() || '';
                        const centuries = parseInt(cells[3]?.textContent?.trim() || '0');
                        
                        players.push({
                            rank: i + 1,
                            name: playerName,
                            team: team,
                            centuries: centuries
                        });
                    }
                }
                return players;
            });
            
            return playersData;
        } catch (error) {
            console.error(`Error scraping centuries data for ${season}:`, error);
            return [];
        }
    }

    async scrapeFiftiesData(season) {
        console.log(`Scraping fifties data for season ${season}...`);
        try {
            const url = `${this.baseUrl}${season}/most-fifties`;
            await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
            
            await this.page.waitForSelector('.table-responsive', { timeout: 10000 });
            
            const playersData = await this.page.evaluate(() => {
                const rows = document.querySelectorAll('.table-responsive tbody tr');
                const players = [];
                
                for (let i = 0; i < Math.min(10, rows.length); i++) {
                    const row = rows[i];
                    const cells = row.querySelectorAll('td');
                    
                    if (cells.length >= 4) {
                        const playerName = cells[1]?.textContent?.trim() || '';
                        const team = cells[2]?.textContent?.trim() || '';
                        const fifties = parseInt(cells[3]?.textContent?.trim() || '0');
                        
                        players.push({
                            rank: i + 1,
                            name: playerName,
                            team: team,
                            fifties: fifties
                        });
                    }
                }
                return players;
            });
            
            return playersData;
        } catch (error) {
            console.error(`Error scraping fifties data for ${season}:`, error);
            return [];
        }
    }

    async scrapeAllData() {
        await this.init();
        
        for (const season of this.seasons) {
            console.log(`\nScraping data for season ${season}...`);
            
            try {
                // Add delays between requests to be respectful
                await new Promise(resolve => setTimeout(resolve, 2000));
                this.data.orangeCapRunners[season] = await this.scrapeRunsData(season);
                
                await new Promise(resolve => setTimeout(resolve, 2000));
                this.data.mostFours[season] = await this.scrapeFoursData(season);
                
                await new Promise(resolve => setTimeout(resolve, 2000));
                this.data.mostSixes[season] = await this.scrapeSixesData(season);
                
                await new Promise(resolve => setTimeout(resolve, 2000));
                this.data.mostCenturies[season] = await this.scrapeCenturiesData(season);
                
                await new Promise(resolve => setTimeout(resolve, 2000));
                this.data.mostFifties[season] = await this.scrapeFiftiesData(season);
                
                console.log(`Completed scraping for season ${season}`);
            } catch (error) {
                console.error(`Error scraping season ${season}:`, error);
            }
        }
        
        await this.browser.close();
        return this.data;
    }

    async saveData(filename = 'ipl_data.json') {
        try {
            await fs.writeJSON(filename, this.data, { spaces: 2 });
            console.log(`Data saved to ${filename}`);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    async loadData(filename = 'ipl_data.json') {
        try {
            if (await fs.pathExists(filename)) {
                this.data = await fs.readJSON(filename);
                console.log(`Data loaded from ${filename}`);
                return this.data;
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
        return null;
    }
}

export default IPLScraper;