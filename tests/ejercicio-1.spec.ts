import 'mocha';
import {expect} from 'chai';
import {add} from '../src/ejercicio-1';


describe('add function test', () => {
  it('add de 1 y 7', () => {
    expect(add(1, 7)).to.be.equal(8);
  });

  it('add de -1 y 8', () => {
    expect(add(-1, 8)).to.be.equal(7);
  });
});
