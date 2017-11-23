import readlineSync from 'readline-sync';
import colors from 'colors'; // eslint-disable-line

const replayNumber = 3;

export const welcome = () => {
  console.log('Welcome to the Brain Games!\n'.rainbow);
  const userName = readlineSync.question('May I have your name? '.cyan);
  console.log(`Hello, ${userName}!\n`.yellow);
  return userName;
};

export const gameProcess = (game, rule, userName) => {
  console.log(`${rule}\n`.green);
  for (let i = replayNumber; i >= 1; i -= 1) {
    const gameState = game();
    console.log(`Question: ${gameState.quest}`.yellow);
    const playerResponse = readlineSync.question('Your answer: '.magenta);

    if (gameState.correctAnswer === playerResponse.toLowerCase()) {
      console.log('Correct!\n'.green);
      if (i === 1) {
        console.log(`All right! Congratulations, ${userName}! \n`.cyan);
      }
    } else {
      console.log(`«${playerResponse}» is the wrong answer. The correct answer is «${gameState.correctAnswer}». Let's try again, ${userName}!\n`.white);
    }
  }
};
