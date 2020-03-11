import React from 'react'

import classes from './Icon.module.css'

const Icon = props => {
    const assetMapping = {
        temp: "temperature.svg",
        wd: "wind-direction.svg",
        hws: "wind-speed.svg",
        pre: "pressure.svg"
    }

    return (
        <img className={classes.IconWrapper} src={require(`../../assets/images/icons/${assetMapping[props.icon]}`)} />
    )
}

export default Icon