import React from 'react';
import Menu from './Menu';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer'>

        <div className='footer-tagline'>
          <p>"Empower Your Finances, Explore the Future – Your Gateway to Cryptocurrency Excellence."</p>
        </div>

        <div>
          <Menu />
        </div>

        <div className='footer-copyright'>
          <div>
            Copyright © 2024. All rights are reserved
          </div>
          <div>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer