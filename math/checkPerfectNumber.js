/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false
  const sqrt = Math.trunc(Math.sqrt(num))
  const ans = [1]
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      ans.push(i, num / i)
    }
  }
  return ans.reduce((prev, cur) => prev + cur, 0) === num
}
