/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const ans = []
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const num = gcd(i, j)
      if (num === 1) {
        ans.push(`${i}/${j}`)
      }
    }
  }
  return ans

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}
