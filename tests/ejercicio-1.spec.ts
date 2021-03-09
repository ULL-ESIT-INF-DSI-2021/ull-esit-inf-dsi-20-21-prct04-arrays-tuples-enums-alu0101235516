import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';


describe('| VERIFICAR VALOR DE LAS RESISTENCIAS |', () => {
  it('resistencia 1', () => {
    expect(decodeResistor(["Rojo", "Violeta"])).to.be.equal(9);
  });
  it('resistencia 2', () => {
    expect(decodeResistor(["Amarillo", "Blanco", "Gris"])).to.be.equal(13);
  });
});
