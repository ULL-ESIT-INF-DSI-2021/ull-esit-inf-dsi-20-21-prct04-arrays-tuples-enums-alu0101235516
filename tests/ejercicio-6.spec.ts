import 'mocha';
import {expect} from 'chai';
import {biDimensional} from '../src/ejercicio-6';


describe('| EJ 6 - PUNTO BI-DIMENSIONAL |', () => {
  it('Primer punto', () => {
    expect(biDimensional(0)).to.deep.equal(0);
  });
  it('Segundo punto', () => {
    expect(biDimensional(0)).to.deep.equal(0);
  });
});
