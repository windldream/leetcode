/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  const maxL = Math.max.apply(null, left)
  const minR = Math.min.apply(null, right)
  return Math.max(maxL, n - minR)
}
