import React from 'react';

const ScoreButtons = props => {
  return(
    <div className={props.styleName}>
      <button onClick={ props.onClickHandler } className={`${props.styleName}__touchdown`}  data-team={props.name} data-points="6">{props.name} Touchdown</button>
      <button onClick={ props.onClickHandler } className={`${props.styleName}__extrapoint`} data-team={props.name} data-points="1">{props.name} Extra Point</button>
      <button onClick={ props.onClickHandler } className={`${props.styleName}__fieldGoal`}  data-team={props.name} data-points="3">{props.name} Field Goal</button>
    </div>
  )
}

export default ScoreButtons;
