import { getRandomInt, getGcd } from '../games-math';
import { gameProcess } from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const numFirst = getRandomInt(0, 51);
  const numSecond = getRandomInt(0, 51);
  const quest = `${numFirst} and ${numSecond}`;
  const correctAnswer = getGcd(numFirst, numSecond).toString();
  return { quest, correctAnswer };
};

const gcdBrainGame = userName => gameProcess(gcdGame, rule, userName);
export default gcdBrainGame;
// gameProcess(gcdGame, rule, 'Nik');
