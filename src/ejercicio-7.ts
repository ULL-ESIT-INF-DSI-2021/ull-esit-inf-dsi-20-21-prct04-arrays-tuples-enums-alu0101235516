/**
 * Puntos bi-dimensionales (suma).
 * @param PrimerPunto Primer punto de coordenadas a sumar.
 * @param SegundoPunto Segundo punto de coordenadas a sumar.
 * @return Devuelve un punto de coordenadas nuevo con la suma realizada.
 * ```ts
 * sumar([4, 2, 5, 7], [1, 2, 3, 2]) -> [5, 4, 8, 9]
 * ```
 */

type Point = [number, number, number, ...number[]]

export function sumar(PrimerPunto: Point, SegundoPunto: Point) {
  const PointResult: Point = [0, 0, 0];

  if (PrimerPunto.length == SegundoPunto.length) {
    let i: number = 0;
    PrimerPunto.forEach((element) => {
      PointResult[i] = element + SegundoPunto[i];
      i++;
    });
    return PointResult;
  } else {
    return "ERROR: Los puntos tienen que tener el mismo tamaño!";
  }
}

/**
 * Puntos bi-dimensionales (resta).
 * @param PrimerPunto Primer punto de coordenadas a restar.
 * @param SegundoPunto Segundo punto de coordenadas a restar.
 * @return Devuelve un punto de coordenadas nuevo con la resta realizada.
 * ```ts
 * restar([4, 2, 5, 7], [1, 2, 3, 2]) -> [3, 0, 2, 5]
 * ```
 */

export function restar(PrimerPunto: Point, SegundoPunto: Point) {
  const PointResult: Point = [0, 0, 0];

  if (PrimerPunto.length == SegundoPunto.length) {
    let i: number = 0;
    PrimerPunto.forEach((element) => {
      PointResult[i] = element - SegundoPunto[i];
      i++;
    });
    return PointResult;
  } else {
    return "ERROR: Los puntos tienen que tener el mismo tamaño!";
  }
}

/**
 * Puntos bi-dimensionales (producto).
 * @param PrimerPunto Punto de coordenadas a multiplicar.
 * @param cons Constante por la que multiplicamos el punto de coordenadas.
 * @return Devuelve un punto de coordenadas nuevo despues de multiplicar por la constante que asignemos.
 * ```ts
 * producto([4, 2, 5, 7], 2) -> [8, 4, 10, 14]
 * ```
 */

export function producto(PrimerPunto: Point, cons: number) {
  const PointResult: Point = [0, 0, 0];

  let i: number = 0;
  PrimerPunto.forEach((element) => {
    PointResult[i] = element * cons;
    i++;
  });
  return PointResult;
}

/**
 * Puntos bi-dimensionales (euclidea).
 * @param PrimerPunto Primer punto de coordenadas.
 * @param SegundoPunto Segundo punto de coordenadas.
 * @return Devuelve un punto de coordenadas nuevo despues de hacer la euclidea entre puntos.
 * ```ts
 * euclidea([4, 2, 5, 7], [1, 2, 3, 2]) -> (5)
 * ```
 */

export function euclidea(PrimerPunto: Point, SegundoPunto: Point) {
  let pt1Pow: number = 0;
  let distancia: number = 0;

  if (PrimerPunto.length == SegundoPunto.length) {
    let i: number = 0;
    SegundoPunto.forEach((element) => {
      pt1Pow = Math.pow((element - PrimerPunto[i]), 2);
      i++;
    });
    distancia = Math.sqrt(pt1Pow);
    return parseFloat(distancia.toFixed(4));
  } else {
    return "ERROR: Los puntos tienen que tener el mismo tamaño!";
  }
}
