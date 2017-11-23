import { getRandomInt, isPrime } from '../games-math';
import { gameProcess } from '..';

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const primeGame = () => {
  const quest = getRandomInt(1, 100);
  const correctAnswer = isPrime(quest) ? 'yes' : 'no';
  return { quest, correctAnswer };
};

const primeGameBrainGame = userName => gameProcess(primeGame, rule, userName);
export default primeGameBrainGame;
