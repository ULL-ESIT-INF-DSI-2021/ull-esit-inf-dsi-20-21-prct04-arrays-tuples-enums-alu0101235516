/**
 * Mover ceros al final.
 * @param ZerosCad Array de entrada compuesto por números.
 * @return Devuelve un array con los ceros al final.
 * ```ts
 * moveZeros([1, 0, 1, 2, 0, 1, 3]) = [1, 1, 2, 1, 3, 0, 0];
 * ```
 */

export function moveZeros(ZerosCad: number[]) {
  const NewCad: number[] = [];
  let count: number = ZerosCad.length;

  ZerosCad.forEach((item) => {
    if (item != 0) {
      NewCad.push(item);
      count--;
    }
  });
  while (count != 0) {
    count--;
    NewCad.push(0);
  }
  return NewCad;
}
