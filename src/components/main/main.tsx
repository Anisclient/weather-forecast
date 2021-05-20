import React from 'react'
import Forecastcard from '../forecastcard'
import './main.scss'

const Main: React.FC = () => {
  return (
    <main className="main">
      <Forecastcard />
      <Forecastcard />
    </main>
  )
}

export default Main
