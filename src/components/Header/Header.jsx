import React from 'react';
import Navbar from './Navbar/Navbar';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Link to="/"><img src={Logo} /></Link>
      <Navbar />
    </header>
  )
}

export default Header;
