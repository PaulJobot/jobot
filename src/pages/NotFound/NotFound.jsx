import React from 'react'
import logoError from '../../assets/jobot_error.png'
import { Link } from 'react-router-dom'

import classes from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={classes.NotFound}>
        <div className={classes.error404}>
            <span>4</span>
            <img src={logoError} alt={logoError} />
            <span>4</span>
        </div>
        <div className={classes.content_error}>
            <p>La page que vous recherchez n'existe pas ou plus</p>
            <Link to="/"><button>Retour à l'accueil</button></Link>
        </div>
    </div>
  )
}

export default NotFound