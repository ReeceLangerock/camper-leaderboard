import React from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRow from "./LeaderboardRow";
import { connect } from "react-redux";

import * as actions from "../actions/actions";
import styled from "styled-components";

const Table = styled.table`
  border-left: 3px solid #21623f;
  border-right: 3px solid #21623f;
  border-bottom: 3px solid #21623f;
  border-top: 1px solid;
  border-collapse: collapse;
  padding: 5px;
  background-color: #f4faff;
  width: 100%;
  color: #535657;
  box-shadow: 0 3px 6px rgba(255, 255, 255, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  tr {
    border-bottom: 1px solid;
    align: left;

    font-size: 1.15rem;
  }

  th {
    padding: 2px;

    font-size: 1.35rem;
  }

  th:nth-child(2) {
    text-align: left;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export class Leaderboard extends React.Component {
  renderLeaderboardRows() {
    if (this.props.selection === "recent") {
      return this.props.recentCampers.map((camper, index) => {
        return <LeaderboardRow key={`${camper.name}-${index}`} camper={camper} rank={index + 1} />;
      });
    } else {
      return this.props.allTimeCampers.map((camper, index) => {
        return <LeaderboardRow key={`${camper.name}-${index}`} camper={camper} rank={index + 1} />;
      });
    }
  }
  render() {
    return (
      <Container className="Leaderboard">
        <LeaderboardHeader />
        <Table>
          <tr>
            <th width={"5%"}>#</th>
            <th>Camper</th>
            <th>All-Time Points</th>
            <th>Points in past 30 Days</th>
          </tr>
          {this.renderLeaderboardRows()}
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  selection: state.camperReducer.selection,
  recentCampers: state.camperReducer.recentCampers,
  allTimeCampers: state.camperReducer.allTimeCampers
});
export default connect(mapStateToProps, actions)(Leaderboard);
