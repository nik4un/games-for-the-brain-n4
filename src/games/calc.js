import { getRandomInt } from '../games-math';
import { gameProcess } from '..';

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const exprArgFirst = getRandomInt(1, 12);
  const exprArgSecond = getRandomInt(1, 12);
  let quest;
  let correctAnswer;
  switch (getRandomInt(1, 4)) {
    case 1: {
      quest = `${exprArgFirst} + ${exprArgSecond}`;
      correctAnswer = (exprArgFirst + exprArgSecond).toString();
      break;
    }
    case 2: {
      quest = `${exprArgFirst} - ${exprArgSecond}`;
      correctAnswer = (exprArgFirst - exprArgSecond).toString();
      break;
    }
    case 3: {
      quest = `${exprArgFirst} * ${exprArgSecond}`;
      correctAnswer = (exprArgFirst * exprArgSecond).toString();
      break;
    }
    default: console.log('strange error');
  }
  return { quest, correctAnswer };
};

const calcBrainGame = userName => gameProcess(calcGame, rule, userName);
export default calcBrainGame;
