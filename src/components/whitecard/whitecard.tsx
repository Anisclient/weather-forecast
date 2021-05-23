import React, { useState } from 'react'
import Placeholder from '../placeholder'
import Result7days from '../result7days'
import Resultdateinthepast from '../resultdateinthepast'
import Selectcity from '../selectcity'
import Selectdate from '../selectdate'
import './whitecard.scss'
import cn from 'classnames'
import Form7days from '../form7days'

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
      <div className="whitecard__selectgroup">
        {type === '7days' ? (
          // <Selectcity />
          <Form7days />
        ) : (
          <>
            {/* <Formforpast /> */}
            {/* <Selectcity className="whitecard__selectcity" /> */}
            {/* <Selectdate className={cn('whitecard__selectdate', isResult && 'result')} /> */}
          </>
        )}
      </div>
      {isResult ? (
        type === '7days' ? (
          <Result7days className="whitecard__result7days" />
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
