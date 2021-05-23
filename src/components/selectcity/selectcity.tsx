import React, { useEffect, useRef, useState } from 'react'
import './selectcity.scss'
import cn from 'classnames'

interface City {
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
  const selectcityRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  function fetchForecast(city: City) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=metric&lang=ru&exclude=current,minutely,hourly&appid=a8bda3d6c35729ebd9a60a4aedcb4178`,
    )
      .then((data) => data.json())
      .then((res) => console.log('res', res))
  }

  useEffect(() => {
    fetchForecast(cities[3])
  }, [])

  function setCityNameToInput(name: string) {
    setValue(name)
    setActive(false)
    selectcityRef.current.focus()
  }

  function setCityNameToInputWithKeyboard(e: React.KeyboardEvent, name: string) {
    const keyCode = e.key

    if (keyCode === 'Enter') {
      setValue(name)
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
  }

  return (
    <form className={cn(className, 'selectcity')} onSubmit={handleSubmit}>
      <label
        htmlFor="selectcity"
        className={cn('selectcity__label', `${active && 'active'}`)}></label>
      <input
        id="selectcity"
        value={value}
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
