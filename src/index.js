import readlineSync from 'readline-sync';

const replayNumber = 3;

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const gameProcess = (game, rule, userName) => {
  console.log(`${rule}`);
  const replayGame = (count) => {
    const gameState = game();
    console.log(`Question: ${gameState.quest}`);
    const playerResponse = readlineSync.question('Your answer: ');

    if (gameState.correctAnswer === playerResponse.toLowerCase()) {
      console.log('Correct!');
      if (count === 1) {
        console.log(`Congratulations, ${userName}! \n`);
        return;
      }
      replayGame(count - 1);
    } else {
      console.log(`«${playerResponse}» is the wrong answer. The correct answer is «${gameState.correctAnswer}». Let's try again, ${userName}!\n`);
    }
  };
  return replayGame(replayNumber);
};
