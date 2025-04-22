// AbelKahsai-backend-api
// 4-21-25

// const axios, cryon, fs
const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');

// const BitQuery and Endpoint
const bitquery_API_KEY = process.env.BITQUERY_API_KEY;
const Endpoint = "https://bitbucket.org/blocknovasllc-interview/ncipher/src/main/backend/";

// create a async function
async function fetchWhaleTxns() {
    try {
        const response = await axios.post(
            Endpoint,
            { query },
            { headers: { 'X-API-KEY': BITQUERY_API_KEY } }
        );

        const data = response.data.data.ethereum.transfers;

        FileSystem.writeFileSync('./data/whaleTxns.json', JSON.stringfly(data, null, 2));
        console.log('Whale transactions updated:', new Date().toLocaleTimeString());
    }   catch (error) {
        console.error('Bitquery fetch failed:', err.message);
    }
}

// Run every couple of minutes (user-defined, default every 5 minutes)
const scheduleFetch = (interval = '*/5 * * * *') => {
    cron.schedule(interval, fetchWhaleTxns);
};

module.exports = { fetchWhaleTxns, scheduleFetch };