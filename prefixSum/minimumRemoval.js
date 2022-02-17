/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  beans.sort((a, b) => a - b)

  const n = beans.length
  const sum = Array(n + 1).fill(0)
  beans.forEach((val, idx) => (sum[idx + 1] = sum[idx] + val))

  let ans = Infinity

  beans.forEach((val, idx) => {
    ans = Math.min(ans, sum[n] - val * (n - idx))
  })

  return ans
}
