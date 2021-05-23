import React from 'react'
import './app.scss'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
import { Provider } from 'react-redux'
import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
