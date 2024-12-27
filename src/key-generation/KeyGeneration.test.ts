import { KeyGenerationService } from './KeyGeneration.service';
import { NostrKey } from '../NostrKey';

describe('key generation', () => {
    let keyGeneratorService: KeyGenerationService;

    beforeEach(() => {
        keyGeneratorService = new KeyGenerationService();
    });

    it('should generate valid nostr keys', () => {
        const keys: NostrKey = keyGeneratorService.generateKeys();

        expect(keys.privateKey).toMatch(/nsec[a-f0-9]{64}/)
        expect(keys.publicKey).toMatch(/npub[a-f0-9]{64}/)
    });
});