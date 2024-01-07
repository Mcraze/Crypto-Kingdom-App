import React from 'react';
import { one, two, three, four, five, six, mainImage } from '../assets/choose-us-icons';

const ChooseUs = () => {
    return (
        <div>
            <h1 className='section-heading'>WHY <span>CHOOSE US?</span></h1>
            <div className='choose-us-container'>
                <div className='inner-container'>
                    <div>
                        <div>
                            <img src={one} alt="1" width={35} height={35} />
                        </div>
                        <div>
                            <h3>Connect your wallet</h3>
                            <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={two} alt="2" width={35} height={35} />
                        </div>
                        <div>
                            <h3>Select your quantity</h3>
                            <p>Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={three} alt="3" width={35} height={35} />
                        </div>
                        <div>
                            <h3>Confirm transactions</h3>
                            <p>Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={mainImage} alt="Choose Us" width={350} height={495} className='choose-us-image' />
                </div>
                <div className='inner-container'>
                    <div>
                        <div>
                            <img src={four} alt="4" width={35} height={35} />
                        </div>
                        <div>
                            <h3>Receive your own NFT's</h3>
                            <p>Invest all your crypto at one place on one platform.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={five} alt="5" width={35} height={35} />
                        </div>
                        <div>
                            <h3>Take a market to sell</h3>
                            <p>Discover, collect the right crypto collections to buy or sell.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={six} alt="6" width={35} height={35} />
                        </div>
                        <div>
                            <h3>Drive your collection</h3>
                            <p>We make it easy to Discover, Invest and manage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs