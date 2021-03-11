import 'mocha';
import {expect} from 'chai';
import {sumar} from '../src/ejercicio-6';
import {restar} from '../src/ejercicio-6';
import {producto} from '../src/ejercicio-6';
import {euclidea} from '../src/ejercicio-6';


describe('| EJ 6 - PUNTO BI-DIMENSIONAL |', () => {
  it('Suma de los puntos', () => {
    expect(sumar([4, 2], [1, 3])).to.deep.equal([5, 5]);
  });
  it('Resta de los puntos', () => {
    expect(restar([4, 2], [1, 3])).to.deep.equal([3, -1]);
  });
  it('Producto de un punto', () => {
    expect(producto([4, 2], 2)).to.deep.equal([8, 4]);
  });
  it('Euclidea entre puntos', () => {
    expect(euclidea([4, 2], [1, 3])).to.deep.equal(3.1623);
  });
});
