import React, { useState } from 'react'
import Placeholder from '../placeholder'
//todo
// import Result7days from '../result7days'
import Result7daysnew from '../result7daysnew'
import Resultdateinthepast from '../resultdateinthepast'
import Selectcity from '../selectcity'
import Selectdate from '../selectdate'
import './forecastcard.scss'

interface ForecastcardProps {
  type: '7days' | 'dateInThePast'
}

const Forecastcard: React.FC<ForecastcardProps> = ({ type }) => {
  const [isResult, setIsResult] = useState(true)

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
      {isResult ? (
        type === '7days' ? (
          <Result7daysnew className="forecastcard__result7daysnew" />
        ) : (
          <Resultdateinthepast className="forecastcard__resultdateinthepast" />
        )
      ) : (
        <Placeholder className="forecastcard__placeholder" />
      )}
    </section>
  )
}

export default Forecastcard
