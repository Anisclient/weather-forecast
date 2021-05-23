import React, { useState } from 'react'
import Placeholder from '../placeholder'
//todo
// import Result7days from '../result7days'
import Result7daysnew from '../result7daysnew'
import Resultdateinthepast from '../resultdateinthepast'
import Selectcity from '../selectcity'
import Selectdate from '../selectdate'
import './whitecard.scss'

interface WhitecardProps {
  type: '7days' | 'dateInThePast'
}

const Whitecard: React.FC<WhitecardProps> = ({ type }) => {
  const [isResult, setIsResult] = useState(true)

  return (
    <section className="main__whitecard whitecard">
      <h3 className="whitecard__title">
        {type === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}
      </h3>
      <div className="whitecard__selectgroup">
        {type === '7days' ? (
          <Selectcity />
        ) : (
          <>
            <Selectcity className="whitecard__selectcity" />
            <Selectdate className="whitecard__selectcity" />
          </>
        )}
      </div>
      {isResult ? (
        type === '7days' ? (
          <Result7daysnew className="whitecard__result7daysnew" />
        ) : (
          <Resultdateinthepast className="whitecard__resultdateinthepast" />
        )
      ) : (
        <Placeholder className="whitecard__placeholder" />
      )}
    </section>
  )
}

export default Whitecard
