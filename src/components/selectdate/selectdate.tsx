import React, { useState } from 'react'
import './selectdate.scss'
import cn from 'classnames'

interface SelectdateProps {
  className?: string
}

const Selectdate: React.FC<SelectdateProps> = ({ className }) => {
  // const selectdateRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const [isTypeText, setIsTypeText] = useState(true)

  function setIsTypeTextTrue() {
    setIsTypeText(true)
  }

  function setIsTypeTextFalse() {
    setIsTypeText(false)
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
        // ref={selectdateRef}
        onFocus={setIsTypeTextFalse}
        onBlur={setIsTypeTextTrue}
        placeholder="Select date"
        className="selectdate__input"
      />
    </div>
  )
}

export default Selectdate
