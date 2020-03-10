import React from 'react'
import moment from 'moment'

import classes from './Date.module.css'

const Date = props => {

    return (
        <div className={classes.DateWrapper}>
            <h1>Sol {props.sol}</h1>
            <h2>{moment(props.date).format('MMM D')}</h2>
        </div>
    )
}

export default Date