import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-height: 40px;
  width: 40px;
  margin-right: 5px;
  border-radius: 3px;
  border: 2px solid #86CB92;
  box-sizing: border-box;
`

const Col = styled.td`
  padding: 4px;
  border-right: 1px solid;
`
const Camper = Col.extend`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`

const Row = styled.tr`
  transition: 0.5s linear;

  &:nth-child(even) {
    background-color: #dee7e7;
  }

  &:hover {
    color: #86CB92;
    transition: 0.5s ease-in;
  }
`

export class LeaderboardRow extends React.Component {
  render () {
    const camper = this.props.camper
    return (
      <Row>
        <Col key={'rank'}>{this.props.rank}</Col>
        <Camper key={'camper'}>
          <Image src={camper.img} /> {camper.username}
        </Camper>
        <Col key={'alltime'}>{camper.alltime}</Col>
        <Col key={'recent'}>{camper.recent}</Col>
      </Row>
    )
  }
}
export default LeaderboardRow
