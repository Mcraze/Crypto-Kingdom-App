import React, { useEffect } from 'react'
import CoinStore from '../stores/CoinStore'
import { useParams } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Footer from '../components/Footer';

const Coin = () => {

  const CoinData = CoinStore()
  const Params = useParams()
  const Info = CoinData.coinInfo;

  useEffect(() => {
    CoinData.fetchData(Params.id);
  }, [])

  console.log(CoinData.coinInfo)

  if (!CoinData || !Info.image) return <></>;

  return (
    <main>
      <section>

        <div className='coin-heading'>
          <img src={Info.image.large} alt={Info.name} width={150} height={150} />
          <h1>{Info.name} ({Info.symbol})</h1>
        </div>

        <div className='scroll-graph'>
          <div className='coin-graph-chart'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={CoinData.graphData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="INR" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p>Last 60 days INR Prices</p>
        </div>

        <hr />

        <h2 style={{ textAlign: 'center' }}>{Info.name} Details</h2>

        <div className='crypto-details-container'>
          <h3>Market Rank 🏆</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p>{Info.market_cap_rank}</p>
              <p>Crypto Rank</p>
            </div>
          </div>
        </div>

        <div className='crypto-details-container'>
          <h3>Current Price 💰</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p style={{ color: Info.market_data.current_price.usd < 0 ? 'red' : 'green' }}>
                {Info.market_data.current_price.usd} $
              </p>
              <p>US Dollars</p>
            </div>
            <div>
              <p style={{ color: Info.market_data.current_price.inr < 0 ? 'red' : 'green' }}>
                {Info.market_data.current_price.inr} &#x20B9;
              </p>
              <p>Indian Rupees</p>
            </div>
          </div>
        </div>

        <div className='crypto-details-container'>
          <h3>Last 24 hours Price change</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p style={{ color: Info.market_data.price_change_24h_in_currency.usd < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_24h_in_currency.usd).toFixed(5)} $
              </p>
              <p>USD price</p>
            </div>
            <div>
              <p style={{ color: Info.market_data.price_change_24h_in_currency.inr < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_24h_in_currency.inr).toFixed(5)} &#x20B9;
              </p>
              <p>INR price</p>
            </div>
          </div>
        </div>
        <div className='crypto-details-container'>
          <h3>1 Hour price change %</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p style={{ color: Info.market_data.price_change_percentage_1h_in_currency.usd < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)} %
              </p>
              <p>USD percent</p>
            </div>
            <div>
              <p style={{ color: Info.market_data.price_change_percentage_1h_in_currency.inr < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_percentage_1h_in_currency.inr).toFixed(2)} %
              </p>
              <p>INR percent</p>
            </div>
          </div>
        </div>

        <div className='crypto-details-container'>
          <h3>24 Hours price change %</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p style={{ color: Info.market_data.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_percentage_24h).toFixed(2)} %
              </p>
              <p>Daily price percent</p>
            </div>
          </div>
        </div>

        <div className='crypto-details-container'>
          <h3>7 Days price change %</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p style={{ color: Info.market_data.price_change_percentage_7d < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_percentage_7d).toFixed(2)} %
              </p>
              <p>Weekly price percent</p>
            </div>
          </div>
        </div>

        <div className='crypto-details-container'>
          <h3>30 Days price change %</h3>
          <div className='crypto-detail-cards'>
            <div>
              <p style={{ color: Info.market_data.price_change_percentage_30d < 0 ? 'red' : 'green' }}>
                {(Info.market_data.price_change_percentage_30d).toFixed(2)} %
              </p>
              <p>Montly price percent</p>
            </div>
          </div>
        </div>

        <div className='crypto-details-container'>
          <h3>Crypto Description:</h3>
          <p dangerouslySetInnerHTML={{ __html: Info.description.en }} className='crypto-description' />
        </div>

      </section>
      
      <Footer />
    </main>
  )
}

export default Coin
