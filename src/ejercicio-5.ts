/**
 *Mover ceros al final.
 * @param factoria Array de entrada compuesto por números a multiplicar.
 * @return Devuelve un array con los numeros de la entrada multiplicados por el numero que hayamos asignado en "multiply".
 * ```ts
 * multiplyAll([4, 2, 3]) = [8, 4, 6];
 * ```
 */

export function multiplyAll(factoria: number[]) {
  return (multiply: number) => {
    const output: number[] = [];
    factoria.forEach((element) => {
      output.push(element * multiply);
    });
    return output;
  };
}

console.log(multiplyAll([4, 2, 3])(2));
