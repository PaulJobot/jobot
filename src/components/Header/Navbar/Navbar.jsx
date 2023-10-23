import React, { useState } from "react";
import classes from "./Navbar.module.css"

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <React.Fragment>
      <div className={classes.buttonToggle} onClick={handleToggle}>
        <div className={toggle ? `${classes.toggle} ${classes.closetoggle}` : classes.toggle}></div>
      </div>
      <nav className={toggle ? classes.navbar : `${classes.navbar} ${classes.closenav}`}>
        <ul className={classes.links}>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">Tarifs</a>
          </li>
          <li>
            <a href="">Nous contacter</a>
          </li>
        </ul>
        <ul className={classes.login}>
          <li>
            <a href="">Se connecter</a>
          </li>
          <li>
            <a href="">Se déconnecter</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;
