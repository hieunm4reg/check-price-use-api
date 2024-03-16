const axios = require('axios');

// Function to fetch price data from the API
async function fetchPriceData(symbol) {
    try {
        // Make an HTTP GET request to the API endpoint
        const response = await axios.get(`https://api.example.com/price/${symbol}`);

        // Extract the price data from the response
        const priceData = response.data;

        return priceData;
    } catch (error) {
        console.error('Error fetching price data:', error);
        throw error;
    }
}

// Example usage:
const symbol = 'BTC'; // Replace with the symbol you want to check
fetchPriceData(symbol)
    .then(priceData => {
        console.log(`Price of ${symbol}: ${priceData.price}`);
        // Do something with the price data
    })
    .catch(error => {
        console.error('Error:', error);
    });
