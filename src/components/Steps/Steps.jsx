import React from 'react'
import stepsIllustration from '../../assets/steps_illustration.png'
import {listSteps} from '../../data/steps'

import classes from './Steps.module.css'

const Steps = () => {

  return (
    <div className={classes.steps}>
        <div className={classes.illustration}>
            <img src={stepsIllustration} alt={stepsIllustration} />
        </div>
        <div className={classes.steps_container}>
            <h2>Votre prochain metier en 4 étapes simples</h2>
            <p>Les 4 étapes à suivre pour obtenir le job de vos rêves grâce à Jobot.</p>
            {
                listSteps.map((content) => {
                    return (
                        <div className={classes.step}>
                            <div className={classes.step_number}>{content.nbr}</div>
                            <div>
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            <button>Trouver un job</button>
        </div>
    </div>
  )
}

export default Steps