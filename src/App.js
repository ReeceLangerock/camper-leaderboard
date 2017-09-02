import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import Leaderboard from './components/Leaderboard'
import Footer from './components/Footer'
import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width:100vw`

class App extends Component {
  render () {
    return (<Provider store={store}>
      <Container className='App'>
        <Leaderboard />
        <Footer/>
      </Container>
    </Provider>
    )
  }
}

export default App
