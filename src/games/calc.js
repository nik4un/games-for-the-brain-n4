import { getRandomInt } from '../games-math';
import { gameProcess } from '..';

const rule = 'What is the result of the expression?';

const calcGame = () => {
  const exprArgFirst = getRandomInt(1, 12);
  const exprArgSecond = getRandomInt(1, 12);
  const operator = ['+', '-', '*'][getRandomInt(0, 3)];
  const quest = `${exprArgFirst} ${operator} ${exprArgSecond}`;
  let correctAnswer;
  switch (operator) {
    case '+': {
      correctAnswer = exprArgFirst + exprArgSecond;
      break;
    }
    case '-': {
      correctAnswer = exprArgFirst - exprArgSecond;
      break;
    }
    case '*': {
      correctAnswer = exprArgFirst * exprArgSecond;
      break;
    }
    default: console.log('strange error');
  }
  correctAnswer = correctAnswer.toString();
  return { quest, correctAnswer };
};

const calcBrainGame = userName => gameProcess(calcGame, rule, userName);
export default calcBrainGame;
