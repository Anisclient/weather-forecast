import React, { useRef, useState } from 'react'
import './selectcity.scss'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { City, setCurrentCity } from '../../store/slices/weatherforaweek'

interface SelectCityProps {
  className?: string
  currentCity: string
  fetch: () => void
  cities: City[]
}

const Selectcity: React.FC<SelectCityProps> = ({ className, currentCity, fetch, cities }) => {
  const [active, setActive] = useState(false)

  const selectcityRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const dispatch = useDispatch()

  function setCityNameToInput(name: string) {
    dispatch(setCurrentCity(name))
    setActive(false)
    selectcityRef.current.focus()
    fetch()
  }

  function setCityNameToInputWithKeyboard(e: React.KeyboardEvent, name: string) {
    const keyCode = e.key

    if (keyCode === 'Enter') {
      dispatch(setCurrentCity(name))
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

  return (
    <div className={cn(className, 'selectcity')}>
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
    </div>
  )
}

export default Selectcity
