#!/usr/bin/env node

import { welcome } from '..';
import balanceBrainGame from '../games/balance';

const userName = welcome();
balanceBrainGame(userName);
