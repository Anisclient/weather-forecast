import React, { useRef, useState } from 'react'
import './selectcity.scss'
import cn from 'classnames'
import { submitLoginFormActionCreator } from '../../store/actions/weatherforaweek'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../../store/slices/weatherforaweek'
import { AppStore } from '../../store/reducers'

export interface City {
  id: number
  name: string
  lat: number
  lon: number
}

interface SelectCityProps {
  className?: string
}

const cities: City[] = [
  { id: 1, name: 'Самара', lat: 53.195873, lon: 50.100193 },
  { id: 2, name: 'Тольятти', lat: 53.507836, lon: 49.420393 },
  { id: 3, name: 'Саратов', lat: 51.533557, lon: 46.034257 },
  { id: 4, name: 'Казань', lat: 55.796127, lon: 49.106405 },
  { id: 5, name: 'Краснодар', lat: 45.03547, lon: 38.975313 },
]

const Selectcity: React.FC<SelectCityProps> = ({ className }) => {
  const [active, setActive] = useState(false)

  const selectcityRef = useRef() as React.MutableRefObject<HTMLInputElement>

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

  function setCityNameToInput(name: string) {
    dispatch(setCity(name))
    setActive(false)
    selectcityRef.current.focus()
    fetch()
  }

  function setCityNameToInputWithKeyboard(e: React.KeyboardEvent, name: string) {
    const keyCode = e.key

    if (keyCode === 'Enter') {
      dispatch(setCity(name))
      setActive(false)
      selectcityRef.current.focus()
    }
  }

  function handleActive() {
    setActive(!active)
  }

  function handleActiveWithKeyboard(e: React.KeyboardEvent) {
    const keyCode = e.key

    if (keyCode === 'ArrowDown') {
      setActive(true)
    }

    if (keyCode === 'ArrowUp') {
      setActive(false)
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    dispatch(submitLoginFormActionCreator(city))
  }

  function fetch() {
    dispatch(submitLoginFormActionCreator(city))
  }

  return (
    <form className={cn(className, 'selectcity')} onSubmit={handleSubmit}>
      <label
        htmlFor="selectcity"
        className={cn('selectcity__label', `${active && 'active'}`)}></label>
      <input
        id="selectcity"
        value={currentCity}
        type="text"
        readOnly
        ref={selectcityRef}
        placeholder="Select city"
        className={cn('selectcity__input', `${active && 'active'}`)}
        onClick={handleActive}
        onKeyDown={handleActiveWithKeyboard}
      />
      {active && (
        <ul className="selectcity__items" tabIndex={0}>
          {cities.map((city) => (
            <li
              className="selectcity__item"
              key={city.id}
              tabIndex={0}
              onClick={() => setCityNameToInput(city.name)}
              onKeyDown={(e) => setCityNameToInputWithKeyboard(e, city.name)}>
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

export default Selectcity
