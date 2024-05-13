import axios from 'axios'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory
}

async function getRate(coins) {
    const API_URL = 'https://blockchain.info/tobtc'
    try {
        const res = await axios.get(`${API_URL}?currency=USD&value=${coins}`)
        return res.data
    } catch (error) {
        console.log('Error fetching data:', error)
        throw error
    }
}

async function getMarketPriceHistory() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        return res.data
    } catch (err) {
        console.log(err);
    }
}