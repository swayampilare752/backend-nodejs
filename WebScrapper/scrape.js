import IPLScraper from './iplScraper.js';

async function main() {
    console.log('🏏 Starting IPL Data Scraping...');
    console.log('This will scrape data for the last 5 seasons (2020-2024)');
    console.log('Please be patient as this may take several minutes...\n');
    
    const scraper = new IPLScraper();
    
    try {
        // Check if data already exists
        const existingData = await scraper.loadData();
        if (existingData && Object.keys(existingData.orangeCapRunners).length > 0) {
            console.log('✅ Existing data found!');
            console.log('Data summary:');
            Object.keys(existingData.orangeCapRunners).forEach(season => {
                console.log(`  - ${season}: ${existingData.orangeCapRunners[season].length} players`);
            });
            
            const userInput = await askUser('\nDo you want to scrape fresh data? (y/N): ');
            if (!userInput.toLowerCase().startsWith('y')) {
                console.log('Using existing data. Exiting...');
                return;
            }
        }
        
        const startTime = Date.now();
        const data = await scraper.scrapeAllData();
        const endTime = Date.now();
        
        await scraper.saveData();
        
        console.log('\n🎉 Scraping completed successfully!');
        console.log(`⏱️  Total time: ${Math.round((endTime - startTime) / 1000)} seconds`);
        console.log('\n📊 Data Summary:');
        
        Object.keys(data.orangeCapRunners).forEach(season => {
            console.log(`\n📅 Season ${season}:`);
            console.log(`  🏃 Top run scorer: ${data.orangeCapRunners[season][0]?.name} (${data.orangeCapRunners[season][0]?.runs} runs)`);
            console.log(`  🏏 Most fours: ${data.mostFours[season][0]?.name} (${data.mostFours[season][0]?.fours} fours)`);
            console.log(`  🚀 Most sixes: ${data.mostSixes[season][0]?.name} (${data.mostSixes[season][0]?.sixes} sixes)`);
            console.log(`  💯 Most centuries: ${data.mostCenturies[season][0]?.name} (${data.mostCenturies[season][0]?.centuries} centuries)`);
            console.log(`  🎯 Most fifties: ${data.mostFifties[season][0]?.name} (${data.mostFifties[season][0]?.fifties} fifties)`);
        });
        
        console.log('\n🌐 You can now start the web server with: npm run serve');
        console.log('📱 Then open http://localhost:3000 to view the dashboard');
        
    } catch (error) {
        console.error('❌ Error during scraping:', error);
        process.exit(1);
    }
}

// Simple function to get user input
function askUser(question) {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question(question, (answer) => {
            readline.close();
            resolve(answer);
        });
    });
}

// Run the scraper
main().catch(console.error);