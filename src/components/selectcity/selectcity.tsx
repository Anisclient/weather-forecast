import React, { useRef, useState } from 'react'
import './selectcity.scss'
import cn from 'classnames'

interface City {
  id: number
  name: string
}

interface SelectProps {
  className?: string
}

const cities: City[] = [
  { id: 1, name: 'Sankt Petersburg' },
  { id: 2, name: 'Saratov' },
  { id: 3, name: 'Samara' },
  { id: 4, name: 'Saransk' },
]

const Selectcity: React.FC<SelectProps> = ({ className }) => {
  const selectcityRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

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
      <input
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
