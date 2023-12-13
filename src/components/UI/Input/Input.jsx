import React from "react";

import classes from './Input.module.css';

const Input = (props) => {

    return (
        <div className={classes.input}>
          <input type="text" placeholder="joe@jobot.fr" />
          <button onClick={props.actionClick}>{props.valueButton}</button>
        </div>
    );

};

export default Input;