import 'mocha';
import {expect} from 'chai';
import {sumar} from '../src/ejercicio-7';
import {restar} from '../src/ejercicio-7';
import {producto} from '../src/ejercicio-7';
import {euclidea} from '../src/ejercicio-7';


describe('| EJ 7 - PUNTO N-DIMENSIONAL |', () => {
  it('Suma de los puntos', () => {
    expect(sumar([4, 2, 5, 7], [1, 2, 3, 2])).to.deep.equal([5, 4, 8, 9]);
  });
  it('Resta de los puntos', () => {
    expect(restar([4, 2, 5, 7], [1, 2, 3, 2])).to.deep.equal([3, 0, 2, 5]);
  });
  it('Producto de un punto', () => {
    expect(producto([4, 2, 5, 7], 2)).to.deep.equal([8, 4, 10, 14]);
  });
  it('Euclidea entre puntos', () => {
    expect(euclidea([4, 2, 5, 7], [1, 2, 3, 2])).to.deep.equal(5);
  });
});
