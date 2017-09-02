import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

export class LeaderboardHeader extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    console.log()
    this.props.setSelection(e.target.value)
    this.props.getRecentCamperData()
  }

  render () {
    return <div className='LeaderboardHeader'>
      <button value='recent' onClick={this.handleClick}>Recent</button>
      <button value='alltime' onClick={this.handleClick}>All-Time</button>
    </div>
  }
}

const mapStateToProps = () => ({

})
export default connect(mapStateToProps, actions)(LeaderboardHeader)
