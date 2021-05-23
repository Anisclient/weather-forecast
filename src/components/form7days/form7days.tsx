import React from 'react'
import './form7days.scss'
import cn from 'classnames'
import { submitLoginFormActionCreator } from '../../store/actions/weatherforaweek'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'
import Selectcity from '../selectcity'
import { City } from '../../store/slices/weatherforaweek'

interface Form7daysProps {
  className?: string
}

const Form7days: React.FC<Form7daysProps> = ({ className }) => {
  const dispatch = useDispatch()

  const currentCity = useSelector<AppStore, string>(
    (rootSelector) => rootSelector.weatherforaweek.currentCity,
  )

  const cities = useSelector<AppStore, City[]>(
    (rootSelector) => rootSelector.weatherforaweek.cities,
  )

  const city: City = cities.find((city) => city.name === currentCity) || {
    id: 0,
    name: '',
    lat: 0,
    lon: 0,
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    dispatch(submitLoginFormActionCreator(city))
  }

  function fetch() {
    dispatch(submitLoginFormActionCreator(city))
  }

  return (
    <form className={cn(className, 'form7days')} onSubmit={handleSubmit}>
      <Selectcity currentCity={currentCity} fetch={fetch} cities={cities} />
    </form>
  )
}

export default Form7days
