import React from 'react'

import classes from './Button.module.css'

const Button = props => {
    let styles = [classes.ButtonWrapper]

    if (props.highlighted) {
        styles = [...styles, classes.highlighted]
    }

    return (
        <button value={props.value} onClick={props.onClickHandler} className={styles.join(' ')}>
            {props.children}
            <p className={classes.ButtonLabel}>{props.label}</p>
        </button>
    )
}

export default Button