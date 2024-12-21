#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { KeyGenerationService } from './KeyGeneration.service.js'

const program = new Command();

program
  .command('generate-nostr-keys')
  .action(() => {
    const keyGenerationService = new KeyGenerationService();
    const keys = keyGenerationService.generateKeys(); 

    console.log(chalk.bold.green('These are your keys to the Nostr network:'));

    console.log(`
      ${chalk.white.bgGreen('Public Key:')} ${keys.publicKey}
      ${chalk.white.bgYellow('Private Key:')} ${keys.privateKey}
    `)

    console.log(chalk.bold.red('These keys are used to identify you on the Nostr network, anyone who gains access to them can impersonate you. If you lose them, you will not be able to access your Nostr account ever again.'));
  });

program.parse();

  