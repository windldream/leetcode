/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// var multiply = function (A, B) {
//   if (A === 0 || B === 0) return 0
//   if (A > B) {
//     return A + multiply(A, B - 1)
//   }
//   return B + multiply(A - 1, B)
// }

var multiply = function (A, B) {
  if (A === 1) return B
  if (B === 1) return A
  if (B & 1) {
    return A + multiply(A + A, B >> 1)
  }
  return multiply(A + A, B >> 1)
}
