import test from 'node:test';
import assert from 'node:assert/strict';
import { KeyGenerationService } from '../dist/key-generation/KeyGeneration.service.js';

test('should generate valid nostr keys', () => {
  const keyGeneratorService = new KeyGenerationService();
  const keys = keyGeneratorService.generateKeys();

  assert.match(keys.privateKey, /^nsec[a-f0-9]{64}$/);
  assert.match(keys.publicKey, /^npub[a-f0-9]{64}$/);
});
