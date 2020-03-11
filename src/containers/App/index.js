import React from 'react'
import axios from 'axios'

import data from './../../data.json'

import Header from './../../components/Header'
import WeatherSummary from './../../components/WeatherSummary'
import DataSelector from './../../components/DataSelector'
import MainWeather from './../../components/MainWeather'
import ListOfDays from './../../components/ListOfDays'

import GenericContentWrapper from './../../elements/GenericContentWrapper'

import classes from './App.module.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSol: '',
            solsList: [],
            dataSetting: '',
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        this.apiRequestHandler()
    }

    apiRequestHandler = () => {
        axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_API_KEY}&feedtype=json&ver=1.0`)
            .then((res) => {
                this.setState({
                    currentSol: res.data.sol_keys[res.data.sol_keys.length - 1],
                    solsList: res.data.sol_keys.map(sol => ({
                        sol,
                        ...res.data[sol]
                    })),
                    dataSetting: 'temp',
                    loading: false
                })
            }).catch(err => console.log(err))
    }

    getWeatherData = (sol) => {
        let result = this.state.solsList.find(item => {
            return item.sol === sol
        })

        return result
    }

    handleSelectSol = (sol) => {
        this.setState({
            currentSol: sol
        })
    }

    handleChangeDataSetting = (setting) => {
        this.setState({
            dataSetting: setting
        })
    }

    mapSolKeys = () => {
        return this.state.solsList.map(item => {
            return item.sol
        })
    }

    render() {
        return (
            <div className={classes.AppBackground}>
                {
                    this.state.loading === true ? (
                        <div>Loading...</div>
                    ) : (
                            <div className={classes.AppContentWrapper}>
                                {/* <div className={classes.AppFlexWrapper}>
                                    <div className={classes.AppFlexColumn}>
                                        <Header />
                                        <MainWeather
                                            weatherData={this.getWeatherData(this.state.currentSol)}
                                            dataSetting={this.state.dataSetting}
                                        />
                                        <DataSelector
                                            onClickHandler={this.handleChangeDataSetting}
                                            dataSetting={this.state.dataSetting}
                                        />
                                    </div>
                                </div>
                                <ListOfDays
                                    solsList={this.state.solsList}
                                    onClickHandler={this.handleSelectSol}
                                    currentSol={this.state.currentSol}
                                /> */}

                                <div className={classes.AppGridWrapper}>
                                    <div className={classes.AppHeaderArea}>
                                        <Header />
                                    </div>
                                    <div className={classes.AppWeatherSummaryArea}>
                                        <MainWeather
                                            weatherData={this.getWeatherData(this.state.currentSol)}
                                            dataSetting={this.state.dataSetting}
                                        />
                                        <DataSelector
                                            onClickHandler={this.handleChangeDataSetting}
                                            dataSetting={this.state.dataSetting}
                                        />
                                    </div>
                                    <div className={classes.AppWeatherDetailsArea}>
                                    </div>
                                    <div className={classes.AppCardsArea}>
                                        <ListOfDays
                                            solsList={this.state.solsList}
                                            onClickHandler={this.handleSelectSol}
                                            currentSol={this.state.currentSol}
                                        />
                                    </div>
                                </div>

                            </div>
                        )
                }
            </div>
        )
    }
}