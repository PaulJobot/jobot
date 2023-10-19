import React from 'react';
import Navbar from './Navbar/Navbar';
import Logo from '../../assets/logo.png';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.Header}>
      <a href="#"><img src={Logo} /></a>
      <Navbar />
    </header>
  )
}

export default Header;
