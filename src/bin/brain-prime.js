#!/usr/bin/env node

import { welcome } from '..';
import primeGameBrainGame from '../games/prime';

const userName = welcome();
primeGameBrainGame(userName);
