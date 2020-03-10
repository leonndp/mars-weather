import React from 'react'

import classes from './Button.module.css'

const Button = props => {
    let styles = [classes.ButtonWrapper]

    if (props.highlighted) {
        styles = [...styles, classes.highlighted]
    }

    return (
        <button value={props.value} onClick={props.onClickHandler} className={styles.join(' ')}>{props.children}</button>
    )
}

export default Button