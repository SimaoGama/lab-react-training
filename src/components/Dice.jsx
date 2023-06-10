import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [rollDice, setRollDice] = useState(diceEmpty);

  const handleRollDice = () => {
    setRollDice(diceEmpty);
    const randomDice = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      switch (randomDice) {
        case 1:
          setRollDice(dice1);
          break;
        case 2:
          setRollDice(dice2);
          break;
        case 3:
          setRollDice(dice3);
          break;
        case 4:
          setRollDice(dice4);
          break;
        case 5:
          setRollDice(dice5);
          break;
        case 6:
          setRollDice(dice6);
          break;
        default:
          setRollDice(diceEmpty);
      }
    }, 1000);
  };

  return (
    <div>
      <img onClick={handleRollDice} className="dice" src={rollDice} alt="" />
    </div>
  );
};

export default Dice;
