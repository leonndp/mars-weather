import React from 'react'


const Pressure = props => {

    return (
        <div>
            <h2>High: {props.pre.mx.toFixed(1)} Pa</h2>
            <h2>Low: {props.pre.mn.toFixed(1)} Pa</h2>
        </div>
    )
}

export default Pressure