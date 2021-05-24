import React, { useEffect } from 'react'
import './formforpast.scss'
import cn from 'classnames'
import { submitForPast } from '../../store/actions/weatherforpast'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'
import Selectcity from '../selectcity'
import { City } from '../../store/slices/weather7days'
import Selectdate from '../selectdate'
import { setCurrentCityForPast } from '../../store/slices/weatherforpast'

interface FormforpastProps {
  className?: string
}

const Formforpast: React.FC<FormforpastProps> = ({ className }) => {
  const dispatch = useDispatch()

  const currentCity = useSelector<AppStore, string>(
    (store) => store.weatherPorPast.currentCityForPast,
  )
  const cities = useSelector<AppStore, City[]>((store) => store.weather7days.cities)
  const city: City = cities.find((city) => city.name === currentCity) || {
    id: 0,
    name: '',
    lat: 0,
    lon: 0,
  }

  const time = useSelector<AppStore, string>((store) => store.weatherPorPast.time)

  function getUnixTime(time: string) {
    const date = time.split('-')
    return (
      new Date(parseInt(date[0], 10), parseInt(date[1], 10) - 1, parseInt(date[2]), 10).getTime() /
      1000
    )
  }

  const unixTime = getUnixTime(time)

  function fetch() {
    city.name !== '' && time && dispatch(submitForPast(city, unixTime))
  }

  useEffect(() => {
    fetch()
  }, [city, time])

  return (
    <form className={cn(className, 'formforpast')}>
      <Selectcity
        className="formforpast__selectcity"
        currentCity={currentCity}
        cities={cities}
        setCurrentCity={setCurrentCityForPast}
        type="dateInThePast"
      />
      <Selectdate className="formforpast__selectdate" />
    </form>
  )
}

export default Formforpast
