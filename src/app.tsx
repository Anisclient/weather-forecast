import React from 'react'
import './app.scss'
import Footer from './components/footer'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  )
}

export default App
