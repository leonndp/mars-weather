import React from 'react'
import classes from './GenericContentWrapper.module.css'

const GenericContentWrapper = props => {

    return (
        <div className={classes.GenericContentWrapper}>
            {props.children}
        </div>
    )
}

export default GenericContentWrapper