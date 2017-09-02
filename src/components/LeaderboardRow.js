import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-height: 40px;
  width: 40px;
  margin-right: 5px;
  border-radius: 3px;
  border: 1px solid green;
  box-sizing: border-box;
`;

const Col = styled.td`
  padding: 5px;
  border-right: 1px solid;
`;
const Camper = Col.extend`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #DEE7E7;
  }
`;

export class LeaderboardRow extends React.Component {
  render() {
    const camper = this.props.camper;
    return (
      <Row>
        <Col key ={'rank'} >{this.props.rank}</Col>
        <Camper key ={'camper'}>
          <Image src={camper.img} /> {camper.username}
        </Camper>
        <Col key ={'alltime'}>{camper.alltime}</Col>
        <Col key ={'recent'}>{camper.recent}</Col>
      </Row>
    );
  }
}
export default LeaderboardRow;
