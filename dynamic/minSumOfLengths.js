/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  const len = arr.length
  const map = new Map()
  map.set(0, 0)
  let sum = 0,
    ans = Infinity
  const dp = Array(len + 1).fill(Infinity)
  for (let i = 1; i <= len; i++) {
    sum += arr[i - 1]
    const rest = sum - target
    dp[i] = dp[i - 1]
    if (map.has(rest)) {
      const pos = map.get(rest)
      const curr = i - pos
      dp[i] = Math.min(dp[i], curr)
      ans = Math.min(ans, curr + dp[pos])
    }
    map.set(sum, i)
  }
  return ans === Infinity ? -1 : ans
}

minSumOfLengths([1, 2, 1, 3, 1], 4)
