#!/usr/bin/env node

import { welcome } from '..';
import evenBrainGame from '../games/even';

const userName = welcome();
evenBrainGame(userName);
