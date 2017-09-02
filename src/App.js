import React, { Component } from 'react'
import logo from './logo.svg'
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import Leaderboard from './components/Leaderboard'

class App extends Component {
  render () {
    return (     <Provider store={store}>
      <div className='App'>
        <Leaderboard/>
      </div>
      </Provider>
    )
  }
}

export default App
