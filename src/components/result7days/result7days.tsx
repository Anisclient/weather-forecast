import React from 'react'
import Forecast from '../forecast'
import './result7days.scss'
import cn from 'classnames'

interface Result7daysProps {
  className?: string
}

const Result7days: React.FC<Result7daysProps> = ({ className }) => {
  return (
    <div className={cn(className, 'result7days')}>
      <Forecast />
    </div>
  )
}

export default Result7days
