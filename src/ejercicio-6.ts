/**
 * Puntos bi-dimensionales (suma).
 * @param PrimerPunto Primer punto de coordenadas a sumar.
 * @param SegundoPunto Segundo punto de coordenadas a sumar.
 * @return Devuelve un punto de coordenadas nuevo con la suma realizada.
 * ```ts
 * sumar([4, 2], [1, 3]) -> [5, 5]
 * ```
 */

type Point = [number, number]

export function sumar(PrimerPunto: Point, SegundoPunto: Point) {
  const PointResult: Point = [0, 0];

  PointResult[0] = PrimerPunto[0] + SegundoPunto[0];
  PointResult[1] = PrimerPunto[1] + SegundoPunto[1];
  return PointResult;
}

/**
 * Puntos bi-dimensionales (resta).
 * @param PrimerPunto Primer punto de coordenadas a restar.
 * @param SegundoPunto Segundo punto de coordenadas a restar.
 * @return Devuelve un punto de coordenadas nuevo con la resta realizada.
 * ```ts
 * restar([4, 2], [1, 3]) -> [3, -1]
 * ```
 */

export function restar(PrimerPunto: Point, SegundoPunto: Point) {
  const PointResult: Point = [0, 0];

  PointResult[0] = PrimerPunto[0] - SegundoPunto[0];
  PointResult[1] = PrimerPunto[1] - SegundoPunto[1];
  return PointResult;
}

/**
 * Puntos bi-dimensionales (producto).
 * @param PrimerPunto Punto de coordenadas a multiplicar.
 * @param cons Constante por la que multiplicamos el punto de coordenadas.
 * @return Devuelve un punto de coordenadas nuevo despues de multiplicar por la constante que asignemos.
 * ```ts
 * producto([4, 2], 2) -> [8, 4]
 * ```
 */

export function producto(PrimerPunto: Point, cons: number) {
  const PointResult: Point = [0, 0];

  PointResult[0] = PrimerPunto[0] * cons;
  PointResult[1] = PrimerPunto[1] * cons;
  return PointResult;
}

/**
 * Puntos bi-dimensionales (euclidea).
 * @param PrimerPunto Primer punto de coordenadas.
 * @param SegundoPunto Segundo punto de coordenadas.
 * @return Devuelve un punto de coordenadas nuevo despues de hacer la euclidea entre puntos.
 * ```ts
 * euclidea([4, 2], [1, 3]) -> (3.1623)
 * ```
 */

export function euclidea(PrimerPunto: Point, SegundoPunto: Point) {
  let pt1Pow: number = 0;
  let pt2Pow: number = 0;
  let distancia: number = 0;

  pt1Pow = Math.pow((SegundoPunto[0] - PrimerPunto[0]), 2);
  pt2Pow = Math.pow((SegundoPunto[1] - PrimerPunto[1]), 2);

  distancia = Math.sqrt(pt1Pow + pt2Pow);
  return parseFloat(distancia.toFixed(4));
}
