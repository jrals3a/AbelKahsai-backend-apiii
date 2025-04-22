// AbelKahsai-backend-api
// 4-21-25

// const express and cors
const express = require('express');
const cors = require('cors');
const { fetchWhaleTxns, scheduleFetch } = require('./whaleMonitor');

// const app
const app = express();
app.use(cors());
app.use(express.json());

// Should be x minutes
scheduleFetch();

// Whale Data
app.get('/api/whales', (req, res) => {
    const data = require('./data/whaleTxns.json');
    res.json(data);
});

// Update cron interval
app.post('/api/schedule', (req, res) => {
    const { interval } = req.body;
    scheduleFetch(interval);
    res.json({ message: 'Cron updated to: ${interval}' });
});

// const PORT
const PORT = 5000;
app.listen(PORT, () => console.log('Backend running on port ${PORT}'));