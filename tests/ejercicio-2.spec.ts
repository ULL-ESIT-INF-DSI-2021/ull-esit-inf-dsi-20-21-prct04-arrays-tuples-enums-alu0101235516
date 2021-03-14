import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

describe('EJ 2 - PALABRAS ENCADENADAS EN UN ARRAY', () => {
  it('meshArray([“allow”, “lowering”, “ringmaster”, “terror”]) returns value lowringter', () => {
    expect(meshArray([`allow`, `lowering`, `ringmaster`, `terror`])).to.be.equal(`lowringter`);
  });
});
