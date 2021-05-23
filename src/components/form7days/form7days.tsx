import React from 'react'
import './form7days.scss'
import cn from 'classnames'
import { submit7days } from '../../store/actions/weather7days'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'
import Selectcity from '../selectcity'
import { City } from '../../store/slices/weather7days'

interface Form7daysProps {
  className?: string
}

const Form7days: React.FC<Form7daysProps> = ({ className }) => {
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

    dispatch(submit7days(city))
  }

  function fetch() {
    dispatch(submit7days(city))
  }

  return (
    <form className={cn(className, 'form7days')} onSubmit={handleSubmit}>
      <Selectcity currentCity={currentCity} fetch={fetch} cities={cities} />
    </form>
  )
}

export default Form7days
