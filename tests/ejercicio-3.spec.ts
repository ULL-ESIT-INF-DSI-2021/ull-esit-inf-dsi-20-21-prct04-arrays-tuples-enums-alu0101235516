import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-3';

describe('| CALCULO DE MEDIA Y CONCATENAR |', () => {
  it('Primera cadena', () => {
    expect(meanAndConcatenate(["u,6,t,2,r,e,0,r,2"])).to.be.equal([5, "utrer"]);
  });
  it('Segunda cadena', () => {
    expect(meanAndConcatenate(["u,6,t,2,r,e,0,r,2"])).to.be.equal([5, "utrer"]);
  });
});
