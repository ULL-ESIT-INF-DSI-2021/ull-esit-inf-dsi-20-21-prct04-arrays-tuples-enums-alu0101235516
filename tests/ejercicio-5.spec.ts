import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';


describe('| EJ 1 - FACTORIA DE MULTIPLICACION |', () => {
  it('Primera multiplicacion', () => {
    expect(multiplyAll([4, 2, 3])).to.be.equal([8, 4, 6]);
  });
  it('Segunda multiplicacion', () => {
    expect(multiplyAll([4, 2, 3])).to.be.equal([8, 4, 6]);
  });
});
