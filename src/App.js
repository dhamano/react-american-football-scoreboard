import React, { useState } from "react";
import BottomRow from "./component/BottomRow";

function App() {
 const [ homeScore, setHomeScore ] = useState(0);
  const [ visitorScore, setVisitorScore ] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{visitorScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={ () => setHomeScore(homeScore + 6) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ () => setHomeScore(homeScore + 1) } className="homeButtons__touchdown">Home Extra Point</button>
          <button onClick={ () => setHomeScore(homeScore + 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ () => setVisitorScore(visitorScore + 3) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ () => setVisitorScore(visitorScore + 1) } className="awayButtons__touchdown">Away Extra Point</button>
          <button onClick={ () => setVisitorScore(visitorScore + 3) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
