import React from 'react'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

import classes from './Footer.module.css'

const Footer = () => {

  const FooterWithColor = () => {
    let location = useLocation();
    let footerColor;

    switch (location.pathname) {
      case "/login":
      case "/tarifs":
        footerColor = 0;
        break;
      default:
        footerColor = 1
    }

    return footerColor

  }

  return (
    <div className={FooterWithColor() === 1 ? classes.footer_gris : classes.footer}>
        <div className={classes.desc}>
            <img src={logo} alt={logo} />
            <p>L'outil qui envoie et optimise vos<br />candidatures automatiquement.</p>
            <div className={classes.links}>
              <a href="">Home</a>
              <a href="">Tarifs</a>
              <a href="">Contact</a>
              <a href="">Pannel</a>
            </div>
        </div>
        <div className={classes.bottom}>
            <p>@2022 Jobot</p>
            <div className={classes.social_networks}>
              <a href="https://www.linkedin.com/company/jobot-fr/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://www.instagram.com/jobot_fr/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://twitter.com/Jobot_fr/" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer