import React from 'react'
import Forecast from '../forecast'
import './resultdateinthepast.scss'
import cn from 'classnames'

interface ResultdateinthepastProps {
  className?: string
}

const Resultdateinthepast: React.FC<ResultdateinthepastProps> = ({ className }) => {
  return (
    <div className={cn(className, 'resultdateinthepast')}>
      <Forecast />
    </div>
  )
}

export default Resultdateinthepast
