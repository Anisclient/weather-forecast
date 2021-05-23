import React from 'react'
import './form7days.scss'
import cn from 'classnames'
import { submitLoginFormActionCreator } from '../../store/actions/weatherforaweek'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'
import Selectcity from '../selectcity'

export interface City {
  id: number
  name: string
  lat: number
  lon: number
}

interface Form7daysProps {
  className?: string
}

const cities: City[] = [
  { id: 1, name: 'Самара', lat: 53.195873, lon: 50.100193 },
  { id: 2, name: 'Тольятти', lat: 53.507836, lon: 49.420393 },
  { id: 3, name: 'Саратов', lat: 51.533557, lon: 46.034257 },
  { id: 4, name: 'Казань', lat: 55.796127, lon: 49.106405 },
  { id: 5, name: 'Краснодар', lat: 45.03547, lon: 38.975313 },
]

const Form7days: React.FC<Form7daysProps> = ({ className }) => {
  const dispatch = useDispatch()

  const currentCity = useSelector<AppStore, string>(
    (rootSelector) => rootSelector.weatherforaweek.city,
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
