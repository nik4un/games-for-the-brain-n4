#!/usr/bin/env node

import { welcome } from '..';
import gcdBrainGame from '../games/gcd';

const userName = welcome();
gcdBrainGame(userName);
