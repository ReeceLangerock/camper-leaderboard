import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

import styled from 'styled-components'

const Header = styled.div`
  border: 3px solid #21623f;
  background-color: #f4faff;
  color: #535657;
  padding: 10px 10px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.5s linear;
  border-bottom: none;
`

const Button = styled.button`
  background-color: #86CB92;
  padding: 5px 15px 5px 15px;
  margin-left:5px;
  margin-right: 5px;
  font-size: 1.4rem;
  border-radius 5px;
  border: 2px solid #21623F;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0, 0.16), 0 2px 4px rgba(0,0,0, 0.23);
  transition: .5s linear;
  

  &:hover:enabled  {
    color: #21623F;
    transition: .5s linear;
    
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0, 0.19), 0 4px 8px rgba(0,0,0, 0.23);
    

  }

  &:disabled {
  
    background-color: #DB616A;
  border: 2px solid #ad343c;
  cursor: not-allowed;  
  }
`

export class LeaderboardHeader extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    this.props.getAlltimeCamperData()
  }

  handleClick (e) {
    console.log()
    this.props.setSelection(e.target.value)
    if (e.target.value === 'recent') {
      this.props.getRecentCamperData()
    } else {
      this.props.getAlltimeCamperData()
    }
  }

  render () {
    const selection = this.props.selection
    return (
      <Header className='LeaderboardHeader'>
        <h1>FCC Camper Leaderboard</h1>
        <div>
          <Button disabled={selection === 'recent'} value='recent' onClick={this.handleClick}>
            Recent
          </Button>
          <Button disabled={selection === 'alltime'} value='alltime' onClick={this.handleClick}>
            All-Time
          </Button>
        </div>
      </Header>
    )
  }
}

const mapStateToProps = state => ({
  selection: state.camperReducer.selection
})
export default connect(mapStateToProps, actions)(LeaderboardHeader)
