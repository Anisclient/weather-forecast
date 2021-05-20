import React from 'react'
import Placeholder from '../placeholder'
import Selectcity from '../selectcity'
import './forecastcard.scss'

const Forecastcard: React.FC = () => {
  return (
    <section className="main__forecastcard forecastcard">
      <h3 className="forecastcard__title">7 Days Forecast</h3>
      <Selectcity className="forecastcard__selectcity" />
      <Placeholder className="forecastcard__placeholder" />
    </section>
  )
}

export default Forecastcard
