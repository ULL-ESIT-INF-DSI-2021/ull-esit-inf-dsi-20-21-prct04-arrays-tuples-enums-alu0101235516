import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('| EJ 7 - PUNTO N-DIMENSIONAL |', () => {
  it('Suma de los puntos', () => {
    expect(agent(10, 10, [1, 3], [3, 5])).to.deep.equal([5, 4, 8, 9]);
  });
  it('Resta de los puntos', () => {
    expect(agent(10, 10, [3, 7], [1, 2])).to.deep.equal([3, 0, 2, 5]);
  });
});
