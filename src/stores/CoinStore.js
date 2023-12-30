import axios from 'axios';
import { create } from 'zustand'

const CoinStore = create((set) => ({

    graphData: [],
    coinInfo: [],

    fetchData: async (CoinId) => {
        const [GraphData, CoinInformation] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${CoinId}/market_chart?vs_currency=inr&days=60`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${CoinId}?localization=false&market_data=true`),
        ]);

        const graphData = GraphData.data.prices.map(obj => {
            const [timestamp, price] = obj;
            const date = new Date(timestamp).toLocaleDateString("en-uk");

            return {
                Date: date,
                INR: (price).toFixed(5)
            }
        });

        set({ graphData })

        set({coinInfo: CoinInformation.data})

    },

}))

export default CoinStore;