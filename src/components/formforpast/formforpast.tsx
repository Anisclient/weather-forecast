import React from 'react'
import './formforpast.scss'
import cn from 'classnames'
import { submit7days } from '../../store/actions/weather7days'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'
import Selectcity from '../selectcity'
import { City } from '../../store/slices/weather7days'
import Selectdate from '../selectdate'

interface FormforpastProps {
  className?: string
  isResult: boolean
}

const Formforpast: React.FC<FormforpastProps> = ({ className, isResult }) => {
  const dispatch = useDispatch()

  const currentCity = useSelector<AppStore, string>((store) => store.weather7days.currentCity)

  const cities = useSelector<AppStore, City[]>((store) => store.weather7days.cities)

  const city: City = cities.find((city) => city.name === currentCity) || {
    id: 0,
    name: '',
    lat: 0,
    lon: 0,
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    //   dispatch(submitLoginFormActionCreator(city))
  }

  function fetch() {
    dispatch(submit7days(city))
  }

  return (
    <form className={cn(className, 'formforpast')} onSubmit={handleSubmit}>
      <Selectcity
        className="formforpast__selectcity"
        currentCity={currentCity}
        fetch={fetch}
        cities={cities}
      />
      <Selectdate className={cn('formforpast__selectdate', isResult && 'result')} />
    </form>
  )
}

export default Formforpast
