import React, { useState } from 'react'
import './selectcity.scss'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { City } from '../../store/slices/weather7days'

interface SelectCityProps {
  className?: string
  currentCity: string
  cities: City[]
  setCurrentCity: (name: string) => void
  type: '7days' | 'dateInThePast'
}

const Selectcity: React.FC<SelectCityProps> = ({
  className,
  currentCity,
  cities,
  setCurrentCity,
  type,
}) => {
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()

  function setCityNameToInput(name: string) {
    dispatch(setCurrentCity(name))
    setActive(false)
  }

  function setCityNameToInputWithKeyboard(e: React.KeyboardEvent, name: string) {
    const keyCode = e.key

    if (keyCode === 'Enter') {
      dispatch(setCurrentCity(name))
      setActive(false)
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

  return (
    <div className={cn(className, 'selectcity')}>
      <label htmlFor={type} className={cn('selectcity__label', `${active && 'active'}`)}></label>
      <input
        id={type}
        value={currentCity}
        type="text"
        readOnly
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
    </div>
  )
}

export default Selectcity
