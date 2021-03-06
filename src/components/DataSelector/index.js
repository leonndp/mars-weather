import React from 'react'

import Button from './../../elements/Button'
import Icon from './../../elements/Icon'

import classes from './DataSelector.module.css'

const DataSelector = props => {
    const mapSettings = [
        { key: 'temp', desc: 'Temperature' },
        { key: 'pre', desc: 'Pressure' },
        { key: 'hws', desc: 'Wind Speed' },
        { key: 'wd', desc: 'Wind Direction' }
    ]

    return (
        <div className={classes.DataSelectorWrapper}>
            {
                mapSettings.map(setting => {
                    return (
                        <Button
                            value={setting.key}
                            key={setting.key}
                            onClickHandler={e => props.onClickHandler(e.target.value)}
                            highlighted={props.dataSetting === setting.key}
                            label={setting.desc}
                        >
                            <Icon icon={setting.key} />
                        </Button>
                    )
                })
            }

        </div>
    )
}

export default DataSelector