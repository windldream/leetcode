/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const mod = 10 ** 9 + 7
  const dp = Array(n + 1).fill(0)
  let a = 1,
    b = 0,
    c = 0
  for (let i = 1; i <= n; i++) {
    const tmp1 = a
    const tmp2 = b
    a = (a + b + c) % mod
    b = tmp1
    c = tmp2
  }
  return a
}

waysToStep(5)
