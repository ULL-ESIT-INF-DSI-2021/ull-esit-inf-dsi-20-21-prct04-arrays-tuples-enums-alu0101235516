import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';


describe('valor resistencias:', () => {
  it('resistencia 1:', () => {
    expect(decodeResistor(`rojo`, `violeta`)).to.be.equal(9);
  });
  it('resistencia 2:', () => {
    expect(decodeResistor(`amarillo`, `blanco`, `negro`)).to.be.equal(9);
  });
});
