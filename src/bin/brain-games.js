#!/usr/bin/env node

import { welcome } from '..';
import evenBrainGame from '../games/even';
import calcBrainGame from '../games/calc';
import gcdBrainGame from '../games/gcd';

const userName = welcome();
evenBrainGame(userName);
calcBrainGame(userName);
gcdBrainGame(userName);
