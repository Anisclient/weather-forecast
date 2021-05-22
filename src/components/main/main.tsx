import React from 'react'
import Forecastcard from '../forecastcard'
import './main.scss'

const Main: React.FC = () => {
  return (
    <main className="main">
      <Forecastcard type="7days" />
      <Forecastcard type="dateInThePast" />
    </main>
  )
}

export default Main
