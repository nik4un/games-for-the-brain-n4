// Возвращает случайное целое число между min (включительно) и max (не включая max)
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// console.log(getRandomInt(2, 3));
