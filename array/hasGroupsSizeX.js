/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = new Map()
  for (const num of deck) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  let x = 0
  for (const count of map.values()) {
    x = gcd(x, count)
    if (x === 1) return false
  }
  return x > 1

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}
