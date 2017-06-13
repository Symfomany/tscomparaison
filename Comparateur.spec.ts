import { Comparateur } from './Comparateur';
import { expect } from 'chai';

// Doc Chai: http://chaijs.com/guide/styles/ equal, to be an
// Doc Mocha: https://mochajs.org/#assertions Describe, it ...
describe("Test Class", function () {

    let comparateur


    it("should equal between comparaison", function () {
        comparateur = new Comparateur('abc', 'cef');
        expect(comparateur.comparaison()).to.equal(2);

        comparateur = new Comparateur('abc', 'abc');
        expect(comparateur.comparaison()).to.equal(0);

    });
});