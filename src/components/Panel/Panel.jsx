import React from 'react'
import panelIllustration from '../../assets/panel_illustration.png'

import classes from './Panel.module.css'

const Panel = () => {
  return (
    <div className={classes.panel}>
        <h2>Plus qu’un outil, un assistant</h2>
        <p>Jobot se démarque en étant plus qu'un simple outil, il agit comme un assistant personnel dans le processus de recrutement, facilitant ainsi chaque étape, de la gestion des candidatures à la communication avec les recruteurs.</p>
        <img src={panelIllustration} alt={panelIllustration} />
    </div>
  )
}

export default Panel