/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var solve = function (nums, queries) {
  const mod = 10 ** 9 + 7
  const len = nums.length
  const k = Math.trunc(Math.sqrt(len))
  const prefixSum = Array(len)
    .fill(0)
    .map(() => Array(k - 1).fill(0))
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < k - 1; j++) {
      if (i + j + 1 < len) {
        prefixSum[i][j] = (nums[i] + prefixSum[i + j + 1][j]) % mod
      } else {
        prefixSum[i][j] = nums[i]
      }
    }
  }

  const m = queries.length
  const ans = Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    let [x, y] = queries[i]
    if (y >= k) {
      let sum = 0
      while (x < len) {
        sum = (sum + nums[x]) % mod
        x += y
      }
      ans[i] = sum
    } else {
      ans[i] = prefixSum[x][y - 1]
    }
  }
  return ans
}
