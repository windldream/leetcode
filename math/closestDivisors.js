/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
  const sq = Math.trunc(Math.sqrt(num + 2)) + 1
  let min = Infinity
  const ans = []
  for (let i = sq; i >= 1; i--) {
    if ((num + 2) % i === 0) {
      const diff = Math.abs((num + 2) / i - i)
      if (diff < min) {
        min = diff
        ans[0] = (num + 2) / i
        ans[1] = i
      }
    }
    if ((num + 1) % i === 0) {
      const diff = Math.abs((num + 1) / i - i)
      if (diff < min) {
        min = diff
        ans[0] = (num + 1) / i
        ans[1] = i
      }
    }
  }
  return ans
}
