/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
  if (A === 1) return B
  if (B === 1) return A
  if (B & 1) {
    return A + multiply(A + A, Math.trunc(B / 2))
  }
  return multiply(A + A, Math.trunc(B / 2))
}
