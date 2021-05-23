import React from 'react'
import Whitecard from '../whitecard'
import './main.scss'

const Main: React.FC = () => {
  return (
    <main className="main">
      <Whitecard type="7days" />
      <Whitecard type="dateInThePast" />
    </main>
  )
}

export default Main
