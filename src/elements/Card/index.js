import React from 'react'

import classes from './Card.module.css'

const Card = props => {
    let styles = [classes.CardWrapper]

    if (props.selected) {
        styles = [...styles, classes.selected]
    }

    return (
        <div className={styles.join(' ')} onClick={props.onClickHandler}>
            <div className={classes.CardContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Card