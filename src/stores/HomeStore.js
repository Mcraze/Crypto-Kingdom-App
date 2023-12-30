import axios from 'axios';
import { create } from 'zustand'
import debounce from '../utils/debounce';

const HomeStore = create((set) => ({

    // Defining an Empty Array to Store Trending Coins
    HomeCoins: [],
    TrendingCoins: [],
    Query: '',
    SearchingAnimate: false,
    SearchResults: false,

    setQuery: (e) => {
        set({ Query: e.target.value });
        HomeStore.getState().searchCoins();
    },

    searchCoins: debounce(async (e) => {
        set({SearchingAnimate: true})
        const { Query, TrendingCoins } = HomeStore.getState();

        if (Query.length > 2) {

            const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${Query}`);

            const resCoins = res.data.coins.map(coin => {
                return {
                    name: coin.name,
                    image: coin.large,
                    id: coin.id
                }
            })

            set({ HomeCoins: resCoins, SearchingAnimate:false, SearchResults: true })
        }
        else 
        {
            set({ HomeCoins: TrendingCoins,  SearchingAnimate:false, SearchResults: false})
        }

    }, 1000),

    fetchCoins: async () => {

        const [TrendingCoinNames, TrendingAmount] = await Promise.all([
            axios.get('https://api.coingecko.com/api/v3/search/trending'),
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr')
        ])
        
        const BtcPriceUSD = TrendingAmount.data.bitcoin.usd;
        const BtcPriceINR = TrendingAmount.data.bitcoin.inr;

        // Mapping coins from data
        const coins = TrendingCoinNames.data.coins.map(coin => {
            return {
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBTC: coin.item.price_btc,
                priceUSD: (coin.item.price_btc * BtcPriceUSD).toFixed(6),
                priceINR: (coin.item.price_btc * BtcPriceINR).toFixed(6),
            }
        })

        set({ HomeCoins: coins, TrendingCoins: coins })
    }
}))

export default HomeStore;