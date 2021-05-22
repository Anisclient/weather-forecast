import React from 'react'
import Placeholder from '../placeholder'
import Selectcity from '../selectcity'
import Selectdate from '../selectdate'
import './forecastcard.scss'

interface ForecastcardProps {
  type: '7days' | 'dateInThePast'
}

const Forecastcard: React.FC<ForecastcardProps> = ({ type }) => {
  return (
    <section className="main__forecastcard forecastcard">
      <h3 className="forecastcard__title">
        {type === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}
      </h3>
      <div className="forecastcard__selectgroup">
        {type === '7days' ? (
          <Selectcity />
        ) : (
          <>
            <Selectcity className="forecastcard__selectcity" />
            <Selectdate className="forecastcard__selectcity" />
          </>
        )}
      </div>
      <Placeholder className="forecastcard__placeholder" />
    </section>
  )
}

export default Forecastcard
