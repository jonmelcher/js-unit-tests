import { expect } from 'chai';
import { foo } from './sample.js';


describe('sample', function() {
    it('works!', async function() {
        expect(await foo()).to.equal(true);
    });
});