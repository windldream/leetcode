/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var paintingPlan = function (n, k) {
  if (k === 0) return 1
  if (k === n * n) return 1

  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i * n + j * n - i * j === k) {
        res += comb(i, n) * comb(j, n)
      }
    }
  }
  return res

  function comb(x, y) {
    if (x === 0) return 1
    let n = 1
    for (let i = 0; i < x; i++) {
      n *= y - i
    }
    for (let i = 1; i <= x; i++) {
      n /= i
    }
    return n
  }
}
