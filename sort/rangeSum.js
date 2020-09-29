/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const mod = 10 ** 9 + 7
  const preSum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }

  const arr = []
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      arr.push(preSum[j + 1] - preSum[i])
    }
  }

  arr.sort((a, b) => a - b)
  let ans = 0
  for (let i = left - 1; i < right; i++) {
    ans = (ans + arr[i]) % mod
  }
  return ans
}

rangeSum([1, 2, 3, 4], 4, 1, 5)
