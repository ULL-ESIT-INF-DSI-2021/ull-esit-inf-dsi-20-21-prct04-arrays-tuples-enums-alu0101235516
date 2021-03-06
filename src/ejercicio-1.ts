/**
 * Decodificar resistencias
 * @param resistor Colores que tiene la resistencia que vamos a decodificar
 * @return La suma
 * ```ts
 * decodeResistor(["Rojo", "Violeta"] = 9
 * ```
 */
// export es para que la funcion se use en otros ficheros

export function decodeResistor(resistor: string[]) {
  const colors:[string, number][] = [["Negro", 0], ["Marron", 1], ["Rojo", 2], ["Naranja", 3], ["Amarillo", 4],
    ["Verde", 5], ["Azul", 6], ["Violeta", 7], ["Gris", 8], ["Blanco", 9]];

  let output: number = 0;
  let i: number = 0;
  let j: number = 0;

  while (i < colors.length && j < 2) {
    if ( colors[i][0] == resistor[j]) {
      output += colors[i][1];
      i = -1;
      j++;
    }
    i++;
  }
  return output;
}

