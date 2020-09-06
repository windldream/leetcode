/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  const res = []
  let i = 1
  let j = 1000
  while (i <= 1000 && j >= 1) {
    if (customfunction.f(i, j) === z) {
      res.push([i, j])
      i++
      j--
    } else if (customfunction.f(i, j) > z) {
      j--
    } else {
      i++
    }
  }
  return res
}
