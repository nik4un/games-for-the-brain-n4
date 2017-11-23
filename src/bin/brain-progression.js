#!/usr/bin/env node

import { welcome } from '..';
import progressionGameBrainGame from '../games/progression';

const userName = welcome();
progressionGameBrainGame(userName);
