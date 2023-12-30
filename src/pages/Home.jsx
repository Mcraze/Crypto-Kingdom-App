import React, { useEffect } from 'react'
import HomeStore from '../stores/HomeStore'
import SpinnerIcon from '../assets/spinner.svg'
import classNames from 'classnames';
import Footer from '../components/Footer';

const Home = () => {

  const Store = HomeStore();

  useEffect(() => {
    Store.fetchCoins()
  }, [])

  return (
    <main>

      <section className='hero-section'>

        <div className='home-heading'>
          <h1>TRACK</h1>
          <h1>CRYPTO CURRENCY</h1>
        </div>
        <div>
          <a href="#market">
            <button className='btn'>Explore Market</button>
          </a>
        </div>

      </section>

      <section id='market'>

        <div className={classNames('home-search-input', {searching: Store.SearchingAnimate})}>
          <form>
            <input type="text" id='search' value={Store.Query} onChange={Store.setQuery} placeholder='Enter Crypto...' />
          </form>
          <img src={SpinnerIcon} alt="Loading..." width={25} height={25} />
        </div>

        <div className='market-heading'>
          <h2>{Store.SearchResults ? "Search Results" : "Trending Coins"}</h2>
        </div>

        <div className='crypto-card-container'>
          {Store.HomeCoins.map(coin => {
            return (
              <a href={`/${coin.id}`} key={coin.id}>
                <div className='crypto-card'>
                  <div className='crypto-name'>
                    <img src={coin.image} alt={coin.name} width={50} height={50} />
                    <h3>{coin.name}</h3>
                  </div>
                  {coin.priceINR && <div className='crypto-prices'>
                    <p>{coin.priceINR} &#x20B9;</p>
                    <p>{coin.priceUSD} $</p>
                  </div>}
                </div>
              </a>
            )
          })}
        </div>

      </section>

      <Footer />
    </main>
  )
}

export default Home