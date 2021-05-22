import React from 'react'
import './forecast.scss'
import cn from 'classnames'
import thunderstorm from '../../assets/thunderstorm.png'

interface ForecastProps {
  className?: string
}

const Forecast: React.FC<ForecastProps> = ({ className }) => {
  return (
    <div className={cn(className, 'forecast')}>
      <div className="forecast__date">
        <p>29 sep 2021</p>
      </div>
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
