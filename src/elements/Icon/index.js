import React from 'react'

import assetMapping from './../../assets/assetMapping.json'
import classes from './Icon.module.css'

const Icon = props => {

    return (
        <img className={classes.IconWrapper} src={require(`../../assets/images/icons/${assetMapping.icons[props.icon]}`)} />
    )
}

export default Icon