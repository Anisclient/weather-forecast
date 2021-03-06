import React, { useEffect } from 'react'
import './form7days.scss'
import cn from 'classnames'
import { submit7days } from '../../store/actions/weather7days'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'
import Selectcity from '../selectcity'
import { City, setCurrentCity } from '../../store/slices/weather7days'

interface Form7daysProps {
  className?: string
}

const Form7days: React.FC<Form7daysProps> = ({ className }) => {
  const dispatch = useDispatch()

  const currentCity = useSelector<AppStore, string>((store) => store.weather7days.currentCity7days)
  const cities = useSelector<AppStore, City[]>((store) => store.weather7days.cities)

  const city: City = cities.find((city) => city.name === currentCity) || {
    id: 0,
    name: '',
    lat: 0,
    lon: 0,
  }

  function fetch() {
    city.name !== '' && dispatch(submit7days(city))
  }

  useEffect(() => {
    fetch()
  }, [city])

  return (
    <form className={cn(className, 'form7days')}>
      <Selectcity
        currentCity={currentCity}
        cities={cities}
        setCurrentCity={setCurrentCity}
        type="7days"
      />
    </form>
  )
}

export default Form7days
