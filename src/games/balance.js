import { getRandomInt, getBalance } from '../games-math';
import { gameProcess } from '..';

const rule = 'Perform the balancing of a number.';

const balanceGame = () => {
  const quest = getRandomInt(10, 1000);

  const getBalancedNumber = (number) => {
    let balancedNumber = number.toString();

    const max = Math.max(...balancedNumber);
    const min = Math.min(...balancedNumber);

    if (max - min > 1) {
      balancedNumber = balancedNumber.replace(max, getBalance(min, max).max);
      balancedNumber = balancedNumber.replace(min, getBalance(min, max).min);
      return getBalancedNumber(balancedNumber);
    }
    return balancedNumber.split('').sort().join('');
  };

  const correctAnswer = getBalancedNumber(quest);
  return { quest, correctAnswer };
};

const balanceBrainGame = userName => gameProcess(balanceGame, rule, userName);
export default balanceBrainGame;
