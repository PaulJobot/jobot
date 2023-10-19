import React from 'react'

import CICLogo from "../../assets/partners/cic_logo.png"
import NeomaLogo from "../../assets/partners/neoma_logo.png"
import GustRoussyLogo from "../../assets/partners/gust_roussy_logo.png"
import classes from './Partners.module.css';

const Partners = () => {
  return (
    <div className={classes.logos}>
        <div className={classes.logos_slide}>
            <img src={CICLogo} alt="cic_logo" />
            <img src={NeomaLogo} alt="neoma_logo" />
            <img src={GustRoussyLogo} alt="gust_roussy_logo" />
        </div>
        <div className={classes.logos_slide}>
            <img src={CICLogo} alt="cic_logo" />
            <img src={NeomaLogo} alt="neoma_logo" />
            <img src={GustRoussyLogo} alt="gust_roussy_logo" />
        </div>
        <div className={classes.logos_slide}>
            <img src={CICLogo} alt="cic_logo" />
            <img src={NeomaLogo} alt="neoma_logo" />
            <img src={GustRoussyLogo} alt="gust_roussy_logo" />
        </div>
    </div>
  )
}

export default Partners