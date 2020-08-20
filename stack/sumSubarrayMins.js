/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
  const MOD = 10 ** 9 + 7
  let res = 0
  let temp = 0
  const stack = []

  for (let i = 0; i < A.length; i++) {
    let count = 1
    while (stack.length && stack[stack.length - 1][0] >= A[i]) {
      const pop = stack.pop()
      count += pop[1]
      temp -= pop[0] * pop[1]
    }
    stack.push([A[i], count])
    temp += A[i] * count
    res = (res + temp) % MOD
  }
  return res
}
