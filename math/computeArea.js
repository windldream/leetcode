/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  const first = (C - A) * (D - B)
  const second = (G - E) * (H - F)
  if (C <= E || D <= F || B >= H || A >= G) return first + second

  const topX = Math.min(G, C)
  const topY = Math.min(H, D)
  const bottomX = Math.max(A, E)
  const bottomY = Math.max(B, F)
  return first + second - (topX - bottomX) * (topY - bottomY)
}
