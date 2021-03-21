/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  const n = nums.length
  const dp = Array(1 << n).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      dp[(1 << i) | (1 << j)] = gcd(nums[i], nums[j])
    }
  }

  for (let i = 0; i < 1 << n; i++) {
    if (count(i) % 2) continue
    // 枚举 i 的子集
    for (let j = i; j !== 0; j = (j - 1) & i) {
      if (count(i) - count(j) === 2) {
        dp[i] = Math.max(dp[i], dp[j] + (count(i) / 2) * dp[i ^ j])
      }
    }
  }
  return dp[(1 << n) - 1]

  function gcd(x, y) {
    if (y === 0) return x
    return gcd(y, x % y)
  }

  function count(n) {
    let ans = 0
    while (n) {
      n = n & (n - 1)
      ans += 1
    }
    return ans
  }
}

maxScore([1, 2, 3, 4])

// dp[i][j] = dp[i][k - 1] + index * gcd(nums[k], nums[j]) + dp[k + 1][j - 1] + dp[j][n]
