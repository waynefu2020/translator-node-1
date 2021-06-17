#!/usr/bin/env node

import * as commander from 'commander';
import {translate} from './main';

const program = new commander.Command();

program
    .version('0.0.1')
    .name('translate')
    .usage('<English>')
    .arguments('<English>')
    .action(function (words) {
        translate(words)
    });

program.parse(process.argv);