import React from 'react'
import './app.scss'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
