#!/usr/bin/env node

import { welcome } from '..';
import evenBrainGame from '../games/even';
import calcBrainGame from '../games/calc';

const userName = welcome();
evenBrainGame(userName);
calcBrainGame(userName);
