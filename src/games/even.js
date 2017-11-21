import { getRandomInt } from '../games-math';
import { gameProcess } from '..';

const rule = 'The answer is "yes" if the number is even, otherwise the answer is "no"';

const evenGame = () => {
  const quest = getRandomInt(1, 101);
  const correctAnswer = quest % 2 === 0 ? 'yes' : 'no';
  return { quest, correctAnswer };
};

const evenBrainGame = userName => gameProcess(evenGame, rule, userName);
export default evenBrainGame;
// gameProcess(evenGame, rule, 'Nik');
