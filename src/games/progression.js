import { getRandomInt } from '../games-math';
import { gameProcess } from '..';

const rule = 'What number is missing in this progression?';

const progressionGame = () => {
  const lengthProgression = 10;
  const startProgression = getRandomInt(1, 50);
  const stepProgression = getRandomInt(1, 11);
  const emptyPosition = getRandomInt(1, lengthProgression);

  const createProgression = (firstItem, step, length) => {
    const arr = [firstItem];
    for (let i = 1; i < length; i += 1) {
      arr.push((i * step) + firstItem);
    }
    return arr;
  };

  let quest = createProgression(startProgression, stepProgression, lengthProgression);
  const correctAnswer = quest.splice(emptyPosition, 1, '..').join('');
  quest = quest.join(' ');

  return { quest, correctAnswer };
};

const progressionGameBrainGame = userName => gameProcess(progressionGame, rule, userName);
export default progressionGameBrainGame;
