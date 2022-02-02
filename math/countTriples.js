/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let count = 0

  for (let a = 1; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      const sum = a * a + b * b
      if (sum > n * n) break
      for (let c = Math.floor(Math.pow(sum, 0.5)); c <= n; c++) {
        if (sum === c * c) {
          count++
          break
        }
      }
    }
  }

  return count * 2
}
