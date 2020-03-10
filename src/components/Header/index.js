import React from 'react'

import GenericContentWrapper from './../../elements/GenericContentWrapper'

import classes from './Header.module.css'

const Header = props => {

    return (
        <div className={classes.HeaderWrapper}>
            <GenericContentWrapper>
                <h1>Latest Weather at Elysium Planitia</h1>
                <p>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars' equator.</p>
            </GenericContentWrapper>
        </div>
    )
}

export default Header