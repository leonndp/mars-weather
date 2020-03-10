import React from 'react'

const WindDirection = props => {

    return (
        <div>
            <h2>{props.wd.most_common.compass_point}</h2>
            <h2>{props.wd.most_common.compass_degrees}°</h2>
        </div>
    )
}

export default WindDirection