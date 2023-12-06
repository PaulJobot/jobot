import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css"
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  useEffect(() => {

    setToggle(false)

  }, [location])

  return (
    <React.Fragment>
      <div className={classes.buttonToggle} onClick={handleToggle}>
        <div className={toggle ? `${classes.toggle} ${classes.closetoggle}` : classes.toggle}></div>
      </div>
      <nav className={toggle ? classes.navbar : `${classes.navbar} ${classes.closenav}`}>
        <ul className={classes.links}>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/tarifs">Tarifs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Nous contacter</NavLink>
          </li>
        </ul>
        <ul className={classes.login}>
          <li>
            <NavLink to="/connection">Se connecter</NavLink>
          </li>
          <li>
            <NavLink to="/inscription">S'inscrire</NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;
