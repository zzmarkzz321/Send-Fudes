'user strict';

const chai = require('chai');
const { assert } = chai;

// Start tests
describe('example mocha-chai test', () => {

    before('', () => {
        console.log('I happen before all the tests!');
    });

    after('', () => {
        console.log('I happen after all the tests!');
    });

    beforeEach('', () => {
        console.log('I happen before every test!');
    });

    afterEach('', () => {
        console.log('I happen after every test!');
    });

    it('Should return a value double of its original value', () => {
        assert.equal(4, 2*2);
    });

    it('Should return a value double of its original value', () => {
        assert.equal(4, 2*2);
    });

    it('Should return a value double of its original value', () => {
        assert.equal(4, 2*2);
    });
});
