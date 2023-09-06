import React, { Component } from 'react';
import { Die } from './Die';

type State = {
  isRolling: boolean;
  roll: {
    dice_one: number;
    dice_two: number;
  };
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
    }, 1500);
  }

  render(): React.ReactNode {
    return (
      <div className="flex flex-col justify-center w-full items-center h-screen ">
        <main className="flex mb-4">
          <div className="mr-5">
            <Die
              diceRoll={this.state.roll.dice_one}
              isRolling={this.state.isRolling}
            />
          </div>
          <div>
            <Die
              diceRoll={this.state.roll.dice_two}
              isRolling={this.state.isRolling}
            />
          </div>
        </main>
        <button
          className={`${
            this.state.isRolling
              ? 'bg-green-500 ease-in-out duration-500'
              : 'bg-black duration-500'
          }  text-xs  rounded-md p-4 w-[140px] text-white`}
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
