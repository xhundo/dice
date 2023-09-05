import React, { Component } from 'react';
import { Die } from './Die';

type State = {
  isRolling: boolean;
  roll: {
    dice_one: number;
    dice_two: number;
  };
  rolls: number[];
};

type DiceProps = {
  rolls: number[];
};

const { floor, random } = Math;

class RollDice extends Component<DiceProps, State> {
  constructor(props: DiceProps) {
    super(props);
    this.roll = this.roll.bind(this);
  }

  state: State = {
    isRolling: false,
    rolls: [1, 2, 3, 4, 6],
    roll: {
      dice_one: this._getRoll(),
      dice_two: this._getRoll(),
    },
  };

  private _getRoll(): number {
    return this.props.rolls[floor(random() * this.props.rolls.length)];
  }

  roll(): void {
    this.setState({
      roll: {
        dice_one: this._getRoll(),
        dice_two: this._getRoll(),
      },
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <div className="flex flex-col justify-center w-full items-center h-screen ">
        <div className="flex items-center">
          <Die diceRoll={this.state.roll.dice_one} />
          <Die diceRoll={this.state.roll.dice_two} />
        </div>
        <button
          className="bg-black text-sm rounded-sm  text-white"
          onClick={this.roll}
          disabled={this.state.isRolling && true}
        >
          {this.state.isRolling ? 'Rolling...' : 'Roll dice!'}
        </button>
      </div>
    );
  }
}

export { RollDice };
