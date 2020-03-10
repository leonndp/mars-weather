import React from 'react'

import Date from './Date'
import Temperature from './Temperature'
import Pressure from './Pressure'
import WindSpeed from './WindSpeed'
import WindDirection from './WindDirection'

import classes from './WeatherSummary.module.css'

const WeatherSummary = props => {
    const propMapping = {
        temp: <Temperature temp={props.weatherData.AT} />,
        pre: <Pressure pre={props.weatherData.PRE} />,
        hws: <WindSpeed hws={props.weatherData.HWS} />,
        wd: <WindDirection wd={props.weatherData.WD} />
    }

    return (
        <div className={`WeatherSummary ${props.className}`}>
            <Date sol={props.weatherData.sol} date={props.weatherData.Last_UTC} />
            {propMapping[props.dataSetting]}
        </div>
    )
}

export default WeatherSummary