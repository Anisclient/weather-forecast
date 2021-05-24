import React, { useState } from 'react'
import './selectdate.scss'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeForPast } from '../../store/slices/weatherforpast'
import { AppStore } from '../../store/reducers'

interface SelectdateProps {
  className?: string
}

const Selectdate: React.FC<SelectdateProps> = ({ className }) => {
  const [isTypeText, setIsTypeText] = useState(true)

  const time = useSelector<AppStore, string>((store) => store.weatherPorPast.time)

  const dispatch = useDispatch()

  function setIsTypeTextTrue() {
    setIsTypeText(true)
  }

  function setIsTypeTextFalse() {
    setIsTypeText(false)
  }

  function setTime(time: string) {
    dispatch(setTimeForPast(time))
  }

  return (
    <div className={cn(className, 'selectdate')}>
      <label htmlFor="selectdate" className={cn('selectdate__label', `${!isTypeText && 'active'}`)}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7V14H14V7H2ZM2 5H14V3H12H4H2V5ZM16 3C16 1.89543 15.1046 1 14 1V0H12V1H4V0H2V1C0.89543 1 0 1.89543 0 3V14C0 15.1046 0.89543 16 2 16H14C15.1046 16 16 15.1046 16 14V3Z"
            fill="currentColor"
          />
        </svg>
      </label>
      <input
        id="selectdate"
        type={isTypeText ? 'text' : 'date'}
        required
        readOnly={isTypeText}
        onFocus={setIsTypeTextFalse}
        onBlur={setIsTypeTextTrue}
        placeholder={isTypeText ? 'Select date' : ''}
        className="selectdate__input"
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
  )
}

export default Selectdate
