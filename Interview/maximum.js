/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function (a, b) {
  return (a + b + Math.abs(a - b)) / 2
}
