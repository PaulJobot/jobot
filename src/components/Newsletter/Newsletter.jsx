import React from 'react'

import classes from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
        <h2>Newsletter</h2>
        <p>Abonnez-vous à notre newsletter et restez informé des dernières offres d'emploi, conseils de recherche d'emploi et mises à jour de notre outil exclusif pour maximiser vos chances de succès.</p>
        <div className={classes.mail}>
          <input type="text" placeholder="joe@jobot.fr" />
          <button>S'abonner</button>
        </div>
    </div>
  )
}

export default Newsletter