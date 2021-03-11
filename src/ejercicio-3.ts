/**
 * Calculo de media y concatenación.
 * @param str Array compuesto por números y letras.
 * @return Devuelve un array con la media y la concatenacion de las letras.
 * ```ts
 * meanAndConcatenate(['u', 6, 't', 2, 'r', 'e', 0, 'r', 2]) = [2.5, 'utrer'];
 * ```
 */

export function meanAndConcatenate(str: (number | string)[]) {
  let numCad: number = 0;
  let letrCad: string = "";
  let count: number = 0;
  let output: [number, string] = [0, ""];

  str.forEach((item) => {
    if (typeof item === "number") {
      numCad += item;
      count++;
    } else {
      letrCad += item;
    }
  });

  numCad = numCad / count;
  output = [numCad, letrCad];
  return output;
}
