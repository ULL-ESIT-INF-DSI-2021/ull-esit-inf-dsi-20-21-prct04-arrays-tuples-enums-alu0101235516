/**
 * Puntos bi-dimensionales.
 * @param PrimerPunto Primer punto de coordenadas.
 * @param SegundoPunto Segundo punto de coordenadas.
 * @param cons Constante por la que multiplicamos el punto de coordenadas.
 * @return Devuelve un punto de coordenadas nuevo, ya sea despues de hacer la suma, resta, producto o la euclidea.
 * ```ts
* sumar([4, 2], [1, 3]) -> [5, 5]
 * restar([4, 2], [1, 3]) -> [3, -1]
 * producto([4, 2], 2) -> [8, 4]
 * euclidea([4, 2], [1, 3]) -> (3.1623)
 * ```
 */

type Point = [number, number]

export function sumar(PrimerPunto: Point, SegundoPunto: Point) {
  const PointResult: Point = [0, 0];

  PointResult[0] = PrimerPunto[0] + SegundoPunto[0];
  PointResult[1] = PrimerPunto[1] + SegundoPunto[1];
  return PointResult;
}

export function restar(PrimerPunto: Point, SegundoPunto: Point) {
  const PointResult: Point = [0, 0];

  PointResult[0] = PrimerPunto[0] - SegundoPunto[0];
  PointResult[1] = PrimerPunto[1] - SegundoPunto[1];
  return PointResult;
}

export function producto(PrimerPunto: Point, cons: number) {
  const PointResult: Point = [0, 0];

  PointResult[0] = PrimerPunto[0] * cons;
  PointResult[1] = PrimerPunto[1] * cons;
  return PointResult;
}

export function euclidea(PrimerPunto: Point, SegundoPunto: Point) {
  let pt1Pow: number = 0;
  let pt2Pow: number = 0;
  let distancia: number = 0;

  pt1Pow = Math.pow((SegundoPunto[0] - PrimerPunto[0]), 2);
  pt2Pow = Math.pow((SegundoPunto[1] - PrimerPunto[1]), 2);

  distancia = Math.sqrt(pt1Pow + pt2Pow);
  return parseFloat(distancia.toFixed(4));
}
