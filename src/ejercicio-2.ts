/**
 * Palabras encadenadas en un array.
 * @param palStr Array con las palabras que vamos a concatenar.
 * @returns Devuelve el encadenamiento realizado.
 * ```ts
 * meshArray([“allow”, “lowering”, “ringmaster”, “terror”]) -> "lowringter"
 * ```
 */

export function meshArray(palStr: string[]) {
  let output: string = ``;
  for (let i: number = 0; i < palStr.length - 1; i++) {
    const palb: string = palStr[i];
    const nextPalb: string = palStr[i + 1];
    let pos: number= palb.length - 1;
    let posnextPalb: number = 0;
    while (palb[pos] != nextPalb[posnextPalb]) {
      pos--;
      if (pos < 0) {
        return `Error en el encadenamiento`;
      }
    }
    for (let j: number = pos; j < palb.length; j++) {
      if (palb[j] == nextPalb[posnextPalb]) {
        output = output + palb[j];
        posnextPalb++;
      } else {
        return `Error en el encadenamiento`;
      }
    }
  }
  return output;
}