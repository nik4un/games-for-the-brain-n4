// Возвращает случайное целое число между min (включительно) и max (не включая max)
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Возвращает наибольший общий делитель двух целых чисел
export const getGcd = (first, second) => {
  const absA = Math.abs(first);
  const absB = Math.abs(second);
  const calcGcd = (a, b) => (b === 0 ? a : getGcd(b, (a % b)));
  return calcGcd(absA, absB);
};

// Возвращает баланс двухзначного числа
export const getBalance = (min, max) => {
  if (max - min > 1) {
    return getBalance(min + 1, max - 1);
  }
  return { min, max };
};
