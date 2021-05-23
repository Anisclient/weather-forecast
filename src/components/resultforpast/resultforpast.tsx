import React from 'react'
import Forecast from '../forecast'
import './resultforpast.scss'
import cn from 'classnames'

interface ResultforpastProps {
  className?: string
}

const Resultforpast: React.FC<ResultforpastProps> = ({ className }) => {
  return (
    <div className={cn(className, 'resultforpast')}>
      <Forecast />
    </div>
  )
}

export default Resultforpast
