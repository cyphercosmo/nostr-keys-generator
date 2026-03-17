import { generateSecretKey, getPublicKey } from 'nostr-tools/pure';
import { NostrKey } from '../NostrKey.js';

const bytesToHex = (bytes: Uint8Array): string =>
    Array.from(bytes, (byte) => {
        const hex = byte.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }).join('');

export class KeyGenerationService {
    generateKeys(): NostrKey {
        const privateKey = generateSecretKey();
        const publicKey = getPublicKey(privateKey);

        return { publicKey: `npub${publicKey}`, privateKey: `nsec${bytesToHex(privateKey)}` };
    }
}