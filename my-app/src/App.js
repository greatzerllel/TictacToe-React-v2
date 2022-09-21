import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import Challengers from './TicTacToe/Challengers';
import React, { useState } from "react";


function App() {
  const [challenger1, setChallenger1] = useState('');
  const [challenger2, setChallenger2] = useState('');
  let Tic = '';
  const check = () => {
    if (challenger1 === '') {
      Tic = '';
    }
    else {
      Tic = <TicTacToe challenger1={challenger1} challenger2={challenger2} />;
    }
  }
  check();
  return (
    <div className="App">
      <Challengers setChallenger1={setChallenger1} setChallenger2={setChallenger2} />
      {Tic}
    </div>
  );
}

export default App;
