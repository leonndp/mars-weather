import React from 'react'


const Temperature = props => {

    return (
        <div>
            <h2>High: {props.temp.mx.toFixed(1)}° F</h2>
            <h2>Low: {props.temp.mn.toFixed(1)}° F</h2>
        </div>
    )
}

export default Temperature