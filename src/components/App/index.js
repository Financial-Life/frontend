import React from "react";
import { useSelector } from "react-redux";
import "../../css/App.scss";

import Onboarding from "../Onboarding";
import AvatarSelector from "../AvatarSelector";

const App = () => {
  const { onboarding, profile } = useSelector((state) => state);

  const Game = () => (
    <div className="App">
      <header className="App-header">
        <h2>Financial Life.</h2>
        <p>Equivócate en el juego y no en la vida real.</p>
      </header>
    </div>
  );
  if (!onboarding.skipped) {
    return <Onboarding />;
  }
  if (!profile.id) {
    return <AvatarSelector />;
  }
  return <Game />;
};

export default App;
