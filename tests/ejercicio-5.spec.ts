import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';


describe('| EJ 5 - FACTORIA DE MULTIPLICACION |', () => {
  it('Primera multiplicacion', () => {
    expect(multiplyAll([4, 2, 3])(2)).to.deep.equal([8, 4, 6]);
  });
  it('Segunda multiplicacion', () => {
    expect(multiplyAll([4, 2, 3])(3)).to.deep.equal([12, 6, 9]);
  });
});
