import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../UI/Input/Input';

import Illustration from '../../assets/home_illustration.png';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

import classes from './Main.module.css';

const Main = (props) => {
  return(
    <div className={classes.Main}>
      <div className={classes.mainleft}>
        <h2><span className={classes.green}>Jobot</span>, la solution qui <span className={classes.purple}>boost votre carrière !</span></h2>
        <p>Jobot vous facilite la recherche d’emploi, envoyez des centaines de candidatures en un click !</p>
        <Input actionClick={() => console.log("hello world")} valueButton="Trouver un job" />
        <button className={classes.btn_down} onClick={props.scroll}>
          <FontAwesomeIcon className={classes.arrow_down} icon={faArrowDownLong} />
        </button>
      </div>
      <div className={classes.mainright}>
        <img src={Illustration} />
      </div>
    </div>
  )
}

export default Main;
