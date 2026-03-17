#!/usr/bin/env node

import { KeyGenerationService } from './KeyGeneration.service.js'
import { NostrKey } from '../NostrKey.js';

declare const process: {
  argv: string[];
  exit(code?: number): never;
};

const printKeys = (keys: NostrKey) => {
  console.log('These are your keys to the Nostr network:');

  console.log(`
    Public Key: ${keys.publicKey}
    Private Key: ${keys.privateKey}
  `)

  console.log('These keys are used to identify you on the Nostr network, anyone who gains access to them can impersonate you.\nIf you lose them, you will not be able to access your Nostr account ever again.');
}

const printJson = (object: any) => {
  console.log(JSON.stringify(object, null, 4))
}

const parseOutputFormat = (argv: string[]): 'terminal' | 'json' => {
  const outputIndex = argv.findIndex((arg) => arg === '--output' || arg === '-o');
  if (outputIndex === -1) {
    return 'terminal';
  }

  const value = argv[outputIndex + 1];
  if (value === 'terminal' || value === 'json') {
    return value;
  }

  console.error('Invalid output format. Use --output terminal or --output json.');
  process.exit(1);
};

const output = parseOutputFormat(process.argv.slice(2));
const keyGenerationService = new KeyGenerationService();
const keys = keyGenerationService.generateKeys();

if (output === 'json') {
  printJson(keys);
} else {
  printKeys(keys);
}
  