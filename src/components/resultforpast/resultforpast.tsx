import React from 'react'
import Forecast from '../forecast'
import './resultforpast.scss'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { AppStore } from '../../store/reducers'

interface ResultforpastProps {
  className?: string
}

const Resultforpast: React.FC<ResultforpastProps> = ({ className }) => {
  const dataForPast = useSelector<AppStore, any>((store) => store.weatherPorPast.dataForPast)

  return (
    <div className={cn(className, 'resultforpast')}>
      <Forecast day={dataForPast?.current} type="dateInThePast" />
    </div>
  )
}

export default Resultforpast
