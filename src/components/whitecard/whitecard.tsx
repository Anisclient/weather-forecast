import React, { useState } from 'react'
import Placeholder from '../placeholder'
import Result7days from '../result7days'
import Resultforpast from '../resultforpast'
import './whitecard.scss'
import Form7days from '../form7days'
import Formforpast from '../formforpast'

interface WhitecardProps {
  type: '7days' | 'dateInThePast'
}

const Whitecard: React.FC<WhitecardProps> = ({ type }) => {
  const [isResult] = useState(true)

  return (
    <section className="main__whitecard whitecard">
      <h3 className="whitecard__title">
        {type === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}
      </h3>
      {type === '7days' ? (
        <Form7days className="whitecard__form" />
      ) : (
        <Formforpast className="whitecard__form" isResult={isResult} />
      )}
      {isResult ? (
        type === '7days' ? (
          <Result7days className="whitecard__result7days" />
        ) : (
          <Resultforpast className="whitecard__resultforpast" />
        )
      ) : (
        <Placeholder className="whitecard__placeholder" />
      )}
    </section>
  )
}

export default Whitecard
