import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

describe('EJ 2 - PALABRAS ENCADENADAS EN UN ARRAY', () => {
  it('Primer encadenamiento', () => {
    expect(meshArray([`allow`, `lowering`, `ringmaster`, `terror`])).to.be.equal(`lowringter`);
  });
});
