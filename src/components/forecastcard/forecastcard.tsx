import React from 'react'
import Placeholder from '../placeholder'
import Selectcity from '../selectcity'
import './forecastcard.scss'

interface ForecastcardProps {
  title: '7 Days Forecast' | 'Forecast for a Date in the Past'
}

const Forecastcard: React.FC<ForecastcardProps> = ({ title }) => {
  return (
    <section className="main__forecastcard forecastcard">
      <h3 className="forecastcard__title">{title}</h3>
      <div className="forecastcard__selectgroup">
        <Selectcity className="forecastcard__selectcity" />
        <Selectcity className="forecastcard__selectcity" />
      </div>
      <Placeholder className="forecastcard__placeholder" />
    </section>
  )
}

export default Forecastcard
