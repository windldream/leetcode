/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let a = m
  let b = n
  for (const [a1, b1] of ops) {
    a = Math.min(a, a1)
    b = Math.min(b, b1)
  }
  return a * b
}

maxCount(3, 3, [
  [2, 2],
  [3, 3]
])
