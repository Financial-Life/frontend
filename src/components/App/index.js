import React from "react";
import { useSelector } from "react-redux";
import "../../css/App.scss";

import Onboarding from "../Onboarding";

const App = () => {
  const { skipped } = useSelector((state) => state.onboarding);

  const Game = () => (
    <div className="App">
      <header className="App-header">
        <h2>Financial Life.</h2>
        <p>Equivócate en el juego y no en la vida real.</p>
      </header>
    </div>
  );
  if (skipped) {
    return Game;
  }

  return <Onboarding />;
};

export default App;
