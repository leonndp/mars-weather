import React from 'react'

const WindSpeed = props => {

    return (
        <div>
            <h2>High: {props.hws.mx.toFixed(1)} m/s</h2>
            <h2>Low: {props.hws.mn.toFixed(1)} m/s</h2>
        </div>
    )
}

export default WindSpeed