import axios from 'axios'

export const bitcoinService = {
    getRate,
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