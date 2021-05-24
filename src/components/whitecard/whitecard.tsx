import React from 'react'
import Placeholder from '../placeholder'
import Result7days from '../result7days'
import Resultforpast from '../resultforpast'
import './whitecard.scss'
import Form7days from '../form7days'
import Formforpast from '../formforpast'
import { AppStore } from '../../store/reducers'
import { useSelector } from 'react-redux'

interface WhitecardProps {
  type: '7days' | 'dateInThePast'
}

const Whitecard: React.FC<WhitecardProps> = ({ type }) => {
  const isResult7days = useSelector<AppStore, boolean>((store) => store.weather7days.isResult)
  const isResultForPast = useSelector<AppStore, boolean>((store) => store.weatherPorPast.isResult)

  const dataForPast = useSelector<AppStore, any>((store) => store.weatherPorPast.dataForPast)

  return (
    <section className="main__whitecard whitecard">
      <h3 className="whitecard__title">
        {type === '7days' ? '7 Days Forecast' : 'Forecast for a Date in the Past'}
      </h3>
      {type === '7days' ? (
        <Form7days className="whitecard__form" />
      ) : (
        <Formforpast className="whitecard__form" />
      )}
      {type === '7days' ? (
        isResult7days ? (
          <Result7days className="whitecard__result7days" />
        ) : (
          <Placeholder className="whitecard__placeholder" />
        )
      ) : isResultForPast ? (
        !dataForPast.current ? (
          <Placeholder className="whitecard__placeholder" />
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
