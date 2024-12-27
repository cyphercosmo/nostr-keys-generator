#!/usr/bin/env node

import { Command, Option } from 'commander';
import chalk from 'chalk';
import { KeyGenerationService } from './KeyGeneration.service.js'
import { NostrKey } from '../NostrKey.js';

const program = new Command();

const printKeys = (keys: NostrKey) => {
  console.log(chalk.bold.green('These are your keys to the Nostr network:'));

  console.log(`
    ${chalk.white.bgGreen('Public Key:')} ${keys.publicKey}
    ${chalk.white.bgYellow('Private Key:')} ${keys.privateKey}
  `)

  console.log(chalk.bold.red('These keys are used to identify you on the Nostr network, anyone who gains access to them can impersonate you. If you lose them, you will not be able to access your Nostr account ever again.'));
}

const printJson = (object: any) => {
  console.log(JSON.stringify(object, null, 4))
}

program
  .addOption(new Option('-o, --output <format>', 'the type of output produced (e.g.: terminal, json').choices(['terminal', 'json']).default('terminal'))
  .action((options) => {
    const keyGenerationService = new KeyGenerationService();
    const keys = keyGenerationService.generateKeys(); 

    switch (options.output) {
      case 'terminal':
        printKeys(keys);
        break;
      case 'json':
        printJson(keys);
      default:
        break;
    }
  });

program.parse();
  