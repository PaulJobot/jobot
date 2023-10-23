import React from 'react'

import classes from './Card.module.css';

const Card = (props) => {

    const colorCard = (color) => {
        if (color == 'green') {
            return classes.green;
        } else if (color == 'purple') {
            return classes.purple;
        } else if (color == 'blue') {
            return classes.blue;
        } else {
            console.log("Erreur Card - une couleur doit être attribué");
        }
    }

  return (
    <div className={`${classes.card} ${colorCard(props.color)}`}>
        <div>
            <div className={classes.card_logo}>{props.logo}</div>
            <p className={classes.card_title}>{props.title}</p>
            <p className={classes.card_desc}>{props.desc}</p>
        </div>
        <div>
            <a href="">En savoir plus</a>
        </div>
    </div>
  )
}

export default Card
