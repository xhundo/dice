import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faDiceOne,
  faDiceTwo,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faDiceThree,
} from '@fortawesome/free-solid-svg-icons';

type DieProps = {
  diceRoll: number;
  isRolling: boolean;
};

interface MapType {
  [key: number]: IconDefinition;
}

class Die extends Component<DieProps> {
  render(): React.ReactNode {
    const { diceRoll, isRolling } = this.props;

    const rollMap: MapType = {
      1: faDiceOne,
      2: faDiceTwo,
      3: faDiceThree,
      4: faDiceFour,
      5: faDiceFive,
      6: faDiceSix,
    };

    return (
      <div className={`${isRolling && 'animate-bounce duration-800'}`}>
        <FontAwesomeIcon
          icon={rollMap[diceRoll]}
          size="5x"
          style={{ color: '#ffea00' }}
        />
      </div>
    );
  }
}

export { Die };
