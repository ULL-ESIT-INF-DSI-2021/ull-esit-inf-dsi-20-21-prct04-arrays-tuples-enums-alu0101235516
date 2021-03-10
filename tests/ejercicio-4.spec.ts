import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('| EJ 4 - MOVER CEROS AL FINAL |', () => {
  it('Primer array', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.deep.equal([1, 1, 2, 1, 3, 0, 0]);
  });
  it('Segundo array', () => {
    expect(moveZeros([1, 2, 1, 0, 7, 1, 0])).to.deep.equal([1, 2, 1, 7, 1, 0, 0]);
  });
});
