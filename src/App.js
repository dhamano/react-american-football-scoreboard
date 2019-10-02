import React, { useState, useEffect } from "react";
import BottomRow from "./component/BottomRow";
import TeamDisplay from "./component/TeamDisplay";
import ScoreButtons from "./component/ScoreButtons";

function App() {
  const [ homeScore, setHomeScore ]       = useState(0);
  const [ visitorScore, setVisitorScore ] = useState(0);
  const [ gameQuarter, nextQuarter ]      = useState(1);
  const [ downs, setDowns ]               = useState(0);
  const [ yardsToGo, setYardsToGo ]       = useState(0);
  const [ ytgValue, changeytg ]           = useState(yardsToGo);
  const [ ballOn, setBallOn ]             = useState(0);
  const [ ballYardValue, setYardValue ]   = useState(ballOn);
  const [ quarterTimer, setQuarterTimer ] = useState(900000);
  const [ minute, setMinutes ]            = useState(0);
  const [ seconds, setSeconds ]           = useState(0);
  const [ timerPaused, setTimerPaused ]   = useState(true);

  const onClickHandler = event => {
    event.target.dataset.team.toLowerCase() === "home" ? setHomeScore(homeScore + parseInt(event.target.dataset.points)) : setVisitorScore(visitorScore + parseInt(event.target.dataset.points))
  };

  const incrementQuarter = event => {
    let nextQuarterValue = gameQuarter + 1;
    nextQuarterValue <= 4 && nextQuarter(nextQuarterValue);
  };

  const resetQuarter = () => {
    nextQuarter(1);
  };

  const incrementDowns = () => {
    let nextDownValue = downs + 1;
    nextDownValue <= 4 ? setDowns(nextDownValue) : clearDowns();
  };

  const clearDowns = () => {
    setDowns(0);
  };

  const yardsChangeHandler = event => {
    changeytg(event.target.value);
  };

  const updateYTG = () => {
    setYardsToGo(ytgValue);
  };

  const ballYardsChangeHandler = event => {
    setYardValue(event.target.value);
  };

  const updateBallYards = () => {
    setBallOn(ballYardValue);
  };
  
  const parsedQuarterTimer = () => {
    setMinutes(Math.floor((quarterTimer/1000/60) << 0));
    setSeconds(Math.floor((quarterTimer/1000) % 60));
  };

  const pauseTimer = () => {
    setTimerPaused(!timerPaused);
  }

  const resetTimer = () => {
    setQuarterTimer(900000);
  }

  useEffect(() => {
    parsedQuarterTimer();
    let timerID = setInterval( () => !timerPaused && tick(), 1000 );
  
    return function cleanup() {
      clearInterval(timerID);
    };
  });
   
  function tick() {
    if(!timerPaused) {
      setQuarterTimer(quarterTimer - 1000);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamDisplay name="home" score={homeScore} />
          <div className="timer">{minute.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}</div>
          <TeamDisplay name="away" score={visitorScore} />
        </div>
        <BottomRow gameQuarter={gameQuarter} downs={downs} yardsToGo={yardsToGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="quarter-timer">
          <button onClick={pauseTimer}>{`${timerPaused ? 'Start Timer' : 'Pause Timer'}`}</button>
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
        <div className="quarter__handler">
          <button onClick={incrementQuarter}>Next Quarter</button>
          <button onClick={resetQuarter}>Reset Quarter</button>
        </div>
        <div className="downs">
          <button onClick={incrementDowns}>Next Down</button>
          <button onClick={clearDowns}>Clear Downs</button>
        </div>
        <div className="yards">
          <input onChange={yardsChangeHandler} type="number" value={ytgValue} />
          <button onClick={updateYTG}>Update YTG</button>
        </div>
        <div className="ball-line">
          <input onChange={ballYardsChangeHandler} type="number" value={ballYardValue} />
          <button onClick={updateBallYards}>Update Ball Yardline</button>
        </div>
        <ScoreButtons name="Home" styleName="homeButtons" onClickHandler={onClickHandler} />
        <ScoreButtons name="Visitor" styleName="awayButtons" onClickHandler={onClickHandler} />
      </section>
    </div>
  );
}

export default App;
