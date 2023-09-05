import React, { Component } from 'react';

type DieProps = {
  diceRoll: number;
};

interface MapType {
  [key: number]: string;
}

class Die extends Component<DieProps> {
  render(): React.ReactNode {
    const { diceRoll } = this.props;

    const rollMap: MapType = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
    };

    return (
      <div className="h-20 w-20 m-0">
        <i className={`fas fa-dice-${rollMap[diceRoll]} h-fit`}></i>
      </div>
    );
  }
}

export { Die };
