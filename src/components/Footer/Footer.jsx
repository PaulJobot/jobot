import React from 'react'
import logo from '../../assets/logo.png'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.desc}>
            <img src={logo} alt={logo} />
            <p>L'outil qui envoie et optimise vos<br /> candidatures automatiquement.</p>
        </div>
        <div className={classes.bottom}>
            <p>@2022 Jobot</p>
        </div>
    </div>
  )
}

export default Footer