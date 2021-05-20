import React from 'react'
import Selectcity from '../select'
import './forecastcard.scss'

const Forecastcard: React.FC = () => {
  return (
    <section className="main__forecastcard forecastcard">
      <h3 className="forecastcard__title">7 Days Forecast</h3>
      <Selectcity className="forecastcard__selectcity" />
    </section>
  )
}

export default Forecastcard
