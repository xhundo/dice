import React, { Component } from 'react';
import { RollDice } from './Components/RollDice';

class App extends Component {
  render() {
    return (
      <div className="flex items-center w-full h-screen justify-center">
        <RollDice rolls={[1, 2, 3, 4, 5, 6]} />
      </div>
    );
  }
}

export default App;
