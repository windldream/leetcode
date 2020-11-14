/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false
  if (x === 0 || y === 0) return z === 0 || x + y === z
  const num = gcd(x, y)
  return z % num === 0

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}

canMeasureWater(2, 6, 5)
