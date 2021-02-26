/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return 1
  let a = 1
  let b = 1
  for (let i = 2; i <= n; i++) {
    const temp = b
    b = a + b
    a = temp
  }
  return b
}
