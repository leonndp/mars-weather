import React from 'react'

import Card from './../../elements/Card'
import Date from './../../components/WeatherSummary/Date'

import classes from './ListOfDays.module.css'

const ListOfDays = props => {

    return (
        <div className={classes.ListOfDaysWrapper}>
            {
                props.solsList.map(item => (
                    <Card
                        key={item.sol}
                        onClickHandler={e => props.onClickHandler(item.sol)}
                        selected={props.currentSol === item.sol}
                    >
                        <Date sol={item.sol} date={item.Last_UTC} />
                    </Card>
                ))
            }
        </div>
    )
}

export default ListOfDays