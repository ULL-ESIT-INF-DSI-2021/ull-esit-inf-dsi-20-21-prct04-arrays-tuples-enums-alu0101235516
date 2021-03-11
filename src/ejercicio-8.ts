/**
 * El agente.
 * @param initialPoint Coordenadas de la posicion inicial del agente.
 * @param finalPoint  Coordenadas de la posicion final del agente.
 * @param X Tamaño en largo del tablero
 * @param Y Tamaño en ancho del tablero
 * @return Devuelve un array con las coordenadas que ha tenido que tomar para llegar al punto final.
 * ```ts
 * agent(10, 10, [1, 3], [3, 5]) = ['East', 'East', 'North', 'North'];
 * ```
 */

export function agent(X: number, Y: number, initialPoint: number[], finalPoint: number[]) {
  if ((initialPoint[0] > X) || (initialPoint[1] > Y) || (finalPoint[0] > X) || (finalPoint[1] > Y)) {
    return "ERROR: La posición inicial o final no puede superar el tamaño del tablero";
  }

  const camino: string[] = [];

  while (initialPoint[0] != finalPoint[0]) {
    if (initialPoint[0] < finalPoint[0]) {
      camino.push("East");
      initialPoint[0]++;
    }
    if (initialPoint[0] > finalPoint[0]) {
      camino.push("West");
      initialPoint[0]--;
    }
  }
  while (initialPoint[1] != finalPoint[1]) {
    if (initialPoint[1] < finalPoint[1]) {
      camino.push("North");
      initialPoint[1]++;
    }
    if (initialPoint[1] > finalPoint[1]) {
      camino.push("South");
      initialPoint[1]--;
    }
  }
  return camino;
}
