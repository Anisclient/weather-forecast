import React from 'react'
import Forecastcard from '../forecastcard'
import './main.scss'

const Main: React.FC = () => {
  return (
    <main className="main">
      <Forecastcard title="7 Days Forecast" />
      <Forecastcard title="Forecast for a Date in the Past" />
    </main>
  )
}

export default Main
