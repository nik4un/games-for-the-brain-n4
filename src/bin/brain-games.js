#!/usr/bin/env node

import { welcome } from '..';
import evenBrainGame from '../games/even';
import calcBrainGame from '../games/calc';
import gcdBrainGame from '../games/gcd';
import balanceBrainGame from '../games/balance';
import progressionGameBrainGame from '../games/progression';
import primeGameBrainGame from '../games/prime';

const userName = welcome();

const games = [
  evenBrainGame,
  calcBrainGame,
  gcdBrainGame,
  balanceBrainGame,
  progressionGameBrainGame,
  primeGameBrainGame,
];

games.sort(() => Math.random() - 0.5);
games.map(el => el(userName));
