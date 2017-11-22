#!/usr/bin/env node

import { welcome } from '..';
import calcBrainGame from '../games/calc';

const userName = welcome();
calcBrainGame(userName);
