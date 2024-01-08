import React, { useState } from 'react';
import Menu from './Menu';
import '../styles/navigation.scss';
import { Discord, Linkedin, MenuIcon, CloseIcon } from '../assets/navbar-icons/index';

const Header = () => {

  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <header className='header-container'>
      <nav className='navbar'>
        <div className='header-logo'>
          <a href="/">CryptoKingdom</a>
        </div>

        <div className='desktop-navigation'>
          <Menu />
        </div>

        <div className='navbar-social-media'>
          <a href="https://discord.com/" target='_blank' rel='noreferrer'>
            <img src={Discord} alt="Discord" width={25} height={25} title='Join our Discord' />
          </a>
          <a href="https://www.linkedin.com/in/mitesh23/" target='_blank' rel='noreferrer'>
            <img src={Linkedin} alt="Discord" width={25} height={25} title='Mitesh Adelkar' />
          </a>
          <div className='menu-icon'>
            {
              toggleMenu
                ? <img src={CloseIcon} alt="Close" width={25} height={25} onClick={() => { settoggleMenu(!toggleMenu) }} />
                : <img src={MenuIcon} alt="Menu" width={25} height={25} onClick={() => { settoggleMenu(!toggleMenu) }} />
            }
          </div>
        </div>

        {toggleMenu &&
          <div className='mobile-navigation'>
            <Menu />
          </div>
        }
      </nav>
    </header>
  )
}

export default Header
