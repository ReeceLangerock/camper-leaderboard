import React from 'react'
import LeaderboardHeader from './LeaderboardHeader'
import LeaderboardRow from './LeaderboardRow'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

export class Leaderboard extends React.Component {

  componentWillMount () {}

  renderLeaderboardRow () {
    return <LeaderboardRow />
  }
  render () {
    return (
      <div className='Leaderboard'>
        <h1>{this.props.selection}</h1>
        <LeaderboardHeader />
        {this.renderLeaderboardRows}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selection: state.camperReducer.selection,
  recentCampers: state.camperReducer.recentCampers,
  allTimeCampers: state.camperReducer.allTimeCampers
})
export default connect(mapStateToProps, actions)(Leaderboard)
