import React from 'react';

const TeamDisplay = props => {
  return (
    <div className={props.name}>
      <h2 className={`${props.name}__name`}>{props.name}</h2>
      <div className={`${props.name}__score`}>{props.score}</div>
    </div>
  )
}

export default TeamDisplay;