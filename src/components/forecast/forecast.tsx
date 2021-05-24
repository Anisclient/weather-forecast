import React from 'react'
import './forecast.scss'
import cn from 'classnames'

interface ForecastProps {
  className?: string
  day?: any
  type: '7days' | 'dateInThePast'
}

const Forecast: React.FC<ForecastProps> = ({ className, day, type }) => {
  const date = new Date(day && day.dt * 1000)

  const getDay = date.getDate()

  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ]
  const getMonth = months[date.getMonth()]

  const getYear = date.getFullYear()

  const forecastDate = `${getDay} ${getMonth} ${getYear}`

  const code = day && day.weather[0]?.icon
  const description = day && day.weather[0]?.description
  const dataForTemp = type === '7days' ? day.temp?.day : day?.temp
  const temp = Math.round(dataForTemp && dataForTemp)

  return (
    <div className={cn(className, 'forecast')}>
      <div className="forecast__date">
        <p>{forecastDate}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${code}@2x.png`}
        alt={description}
        className="forecast__img"></img>
      <p className="forecast__temperature">+{temp}°</p>
    </div>
  )
}

export default Forecast
