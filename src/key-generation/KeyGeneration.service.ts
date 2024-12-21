import { generateSecretKey, getPublicKey } from 'nostr-tools/pure';
import { NostrKey } from '../NostrKey.js';

import { bytesToHex } from '@noble/hashes/utils';

export class KeyGenerationService {
    generateKeys(): NostrKey {
        const privateKey = generateSecretKey();
        const publicKey = getPublicKey(privateKey);

        return { publicKey: `npub${publicKey}`, privateKey: `nsec${bytesToHex(privateKey)}` };
    }
}