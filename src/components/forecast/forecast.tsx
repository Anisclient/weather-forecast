import React from 'react'
import './forecast.scss'
import thunderstorm from '../../assets/thunderstorm.png'

const Forecast = () => {
  return (
    <div className="forecast">
      <p className="forecast__date">29 sep 2021</p>
      <img
        src={thunderstorm}
        // todo
        alt="description"
        className="forecast__img"></img>
      <p className="forecast__temperature">+17°</p>
    </div>
  )
}

export default Forecast
