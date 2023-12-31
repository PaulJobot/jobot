import React from 'react'
import Card from '../UI/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp, faShoePrints, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

import classes from './Infos.module.css';

const Infos = () => {
  return (
    <div className={classes.Infos}>
        <p className={classes.infos_title}>Le metier de vos rêves <br/>en un click !</p>
        <div className={classes.cards}>
            <Card 
                color = "green"
                logo = {<FontAwesomeIcon icon={faHandPointUp} />}
                title = "Plus (qu')un geste"
                desc = "Jobot simplifie votre recherche d'emploi en un seul clic, en automatisant l'envoi et l'optimisation de vos candidatures pour maximiser vos chances de succès."
            />
            <Card 
                color = "blue"
                logo = {<FontAwesomeIcon icon={faShoePrints} />}
                title = "Suivi à la trace"
                desc = "Notre outil vous accompagne tout au long de votre recherche d'emploi avec un suivi efficace pour maximiser vos chances de succès."
            />
            <Card 
                color = "purple"
                logo = {<FontAwesomeIcon icon={faEarthAmericas} />}
                title = "Nul par ailleurs"
                desc = "Avec Jobot, bénéficiez d'une plateforme unique combinant recherche d'emploi, gestion de candidatures et interactions avec les recruteurs, tout en un seul endroit pour une expérience de recherche d'emploi sans égal."
            />
        </div>
    </div>
  )
}

export default Infos

