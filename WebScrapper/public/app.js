// Global variables
let iplData = null;
let charts = {};

// Color schemes for different chart types
const colorSchemes = {
    runs: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e', '#95a5a6', '#16a085'],
    fours: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e', '#95a5a6', '#16a085'],
    sixes: ['#e67e22', '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#34495e', '#95a5a6', '#16a085'],
    centuries: ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c', '#e67e22', '#34495e', '#95a5a6', '#16a085'],
    fifties: ['#2ecc71', '#e74c3c', '#3498db', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e', '#95a5a6', '#16a085']
};

// Chart configuration templates
const chartConfig = {
    type: 'bar',
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    title: function(context) {
                        return context[0].label;
                    },
                    label: function(context) {
                        const dataType = context.dataset.label || '';
                        return `${dataType}: ${context.parsed.y}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                ticks: {
                    maxRotation: 45,
                    minRotation: 45
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('IPL Dashboard initialized');
    // Try to load existing data on page load
    loadData();
});

// Load data from API
async function loadData() {
    const loading = document.getElementById('loading');
    const dashboard = document.getElementById('dashboard');
    const statsSummary = document.getElementById('statsSummary');
    
    loading.style.display = 'block';
    dashboard.style.display = 'none';
    statsSummary.style.display = 'none';
    
    try {
        const response = await fetch('/api/data');
        const result = await response.json();
        
        if (result.data === null) {
            alert('No data available. Please scrape data first by clicking "Scrape New Data".');
            loading.style.display = 'none';
            return;
        }
        
        iplData = result;
        console.log('Data loaded:', iplData);
        
        // Show dashboard and create charts
        loading.style.display = 'none';
        dashboard.style.display = 'grid';
        statsSummary.style.display = 'block';
        
        createAllCharts();
        updateStatsOverview();
        
    } catch (error) {
        console.error('Error loading data:', error);
        alert('Error loading data. Please try again.');
        loading.style.display = 'none';
    }
}

// Trigger data scraping
async function scrapeData() {
    const scraping = document.getElementById('scraping');
    const dashboard = document.getElementById('dashboard');
    const statsSummary = document.getElementById('statsSummary');
    
    if (!confirm('This will start scraping fresh data from the IPL website. This process may take several minutes. Continue?')) {
        return;
    }
    
    scraping.style.display = 'block';
    dashboard.style.display = 'none';
    statsSummary.style.display = 'none';
    
    try {
        const response = await fetch('/api/scrape', { method: 'POST' });
        const result = await response.json();
        
        alert(result.message);
        
        // Check periodically if scraping is complete
        checkScrapingStatus();
        
    } catch (error) {
        console.error('Error starting scraping:', error);
        alert('Error starting scraping. Please try again.');
        scraping.style.display = 'none';
    }
}

// Check scraping status
async function checkScrapingStatus() {
    const scraping = document.getElementById('scraping');
    
    // Simple polling - in a real app you'd use WebSockets
    const interval = setInterval(async () => {
        try {
            const response = await fetch('/api/data');
            const result = await response.json();
            
            if (result.data !== null && Object.keys(result.orangeCapRunners || {}).length > 0) {
                clearInterval(interval);
                scraping.style.display = 'none';
                alert('Data scraping completed! Loading dashboard...');
                loadData();
            }
        } catch (error) {
            console.log('Still scraping...');
        }
    }, 10000); // Check every 10 seconds
    
    // Stop checking after 10 minutes
    setTimeout(() => {
        clearInterval(interval);
        scraping.style.display = 'none';
        alert('Scraping is taking longer than expected. Please try loading data manually.');
    }, 600000);
}

// Create all charts
function createAllCharts() {
    createChart('runs', 'runsChart', '2024');
    createChart('fours', 'foursChart', '2024');
    createChart('sixes', 'sixesChart', '2024');
    createChart('centuries', 'centuriesChart', '2024');
    createChart('fifties', 'fiftiesChart', '2024');
}

// Create individual chart
function createChart(type, canvasId, season) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    const data = getChartData(type, season);
    if (!data) return;
    
    // Destroy existing chart if it exists
    if (charts[canvasId]) {
        charts[canvasId].destroy();
    }
    
    const config = {
        ...chartConfig,
        data: {
            labels: data.labels,
            datasets: [{
                label: data.label,
                data: data.values,
                backgroundColor: colorSchemes[type],
                borderColor: colorSchemes[type].map(color => color + '80'),
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        }
    };
    
    // Customize y-axis based on data type
    if (type === 'centuries' || type === 'fifties') {
        config.options.scales.y.ticks.stepSize = 1;
    }
    
    charts[canvasId] = new Chart(ctx, config);
}

// Get data for specific chart type and season
function getChartData(type, season) {
    if (!iplData) return null;
    
    const dataMap = {
        'runs': 'orangeCapRunners',
        'fours': 'mostFours',
        'sixes': 'mostSixes',
        'centuries': 'mostCenturies',
        'fifties': 'mostFifties'
    };
    
    const valueMap = {
        'runs': 'runs',
        'fours': 'fours',
        'sixes': 'sixes',
        'centuries': 'centuries',
        'fifties': 'fifties'
    };
    
    const seasonData = iplData[dataMap[type]]?.[season];
    if (!seasonData || !Array.isArray(seasonData)) return null;
    
    const labels = seasonData.map(player => `${player.name} (${player.team})`);
    const values = seasonData.map(player => player[valueMap[type]] || 0);
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    
    return { labels, values, label };
}

// Update chart when season selector changes
function updateChart(type) {
    const selectorId = type + 'SeasonSelector';
    const canvasId = type + 'Chart';
    const season = document.getElementById(selectorId).value;
    
    createChart(type, canvasId, season);
}

// Update stats overview
function updateStatsOverview() {
    if (!iplData) return;
    
    const statsGrid = document.getElementById('statsGrid');
    const seasons = ['2024', '2023', '2022', '2021', '2020'];
    
    // Calculate total stats
    const stats = {
        totalPlayers: new Set(),
        totalRuns: 0,
        totalFours: 0,
        totalSixes: 0,
        totalCenturies: 0,
        totalFifties: 0
    };
    
    seasons.forEach(season => {
        // Count unique players
        if (iplData.orangeCapRunners[season]) {
            iplData.orangeCapRunners[season].forEach(player => {
                stats.totalPlayers.add(player.name);
                stats.totalRuns += player.runs || 0;
            });
        }
        
        if (iplData.mostFours[season]) {
            iplData.mostFours[season].forEach(player => {
                stats.totalFours += player.fours || 0;
            });
        }
        
        if (iplData.mostSixes[season]) {
            iplData.mostSixes[season].forEach(player => {
                stats.totalSixes += player.sixes || 0;
            });
        }
        
        if (iplData.mostCenturies[season]) {
            iplData.mostCenturies[season].forEach(player => {
                stats.totalCenturies += player.centuries || 0;
            });
        }
        
        if (iplData.mostFifties[season]) {
            iplData.mostFifties[season].forEach(player => {
                stats.totalFifties += player.fifties || 0;
            });
        }
    });
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-number">${seasons.length}</div>
            <div class="stat-label">Seasons Analyzed</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.totalPlayers.size}</div>
            <div class="stat-label">Unique Players</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.totalRuns.toLocaleString()}</div>
            <div class="stat-label">Total Runs</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.totalFours.toLocaleString()}</div>
            <div class="stat-label">Total Fours</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.totalSixes.toLocaleString()}</div>
            <div class="stat-label">Total Sixes</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.totalCenturies}</div>
            <div class="stat-label">Total Centuries</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.totalFifties}</div>
            <div class="stat-label">Total Fifties</div>
        </div>
    `;
}