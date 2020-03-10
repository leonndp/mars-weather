import React from 'react'

import WeatherSummary from './../WeatherSummary'
import GenericContentContainer from './../../elements/GenericContentWrapper'

import classes from './MainWeather.module.css'

const MainWeather = props => {

    return (
        <div className={classes.MainWeatherWrapper}>
            <GenericContentContainer>
                <WeatherSummary className={classes.WeatherWrapper} weatherData={props.weatherData} dataSetting={props.dataSetting} />
            </GenericContentContainer>
        </div>
    )
}

export default MainWeather