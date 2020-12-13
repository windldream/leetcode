/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function (nums, k) {
  const len = nums.length
  if (len === k) return 0
  const value = Array(1 << len).fill(-1)
  outer: for (let sub = 0; sub < 1 << len; sub++) {
    if (getCount(sub) === len / k) {
      // 统计子集选择的数字个数
      const freq = Array(len + 1).fill(0)
      for (let j = 0; j < len; j++) {
        if (sub & (1 << j)) {
          freq[nums[j]] += 1
        }
      }

      // 每个子集选择的数字都不能超过1
      for (let j = 1; j <= len; j++) {
        if (freq[j] > 1) {
          continue outer
        }
      }

      let min = Infinity
      let max = -Infinity
      for (let j = 1; j <= len; j++) {
        if (freq[j] > 0) {
          max = Math.max(max, j)
          min = Math.min(min, j)
        }
      }
      value[sub] = max - min
    }
  }

  const dp = Array(1 << len).fill(-1)
  dp[0] = 0
  for (let mask = 1; mask < 1 << len; mask++) {
    if (getCount(mask) % (len / k) === 0) {
      for (let sub = mask; sub; sub = (sub - 1) & mask) {
        if (value[sub] !== -1 && dp[mask ^ sub] != -1) {
          if (dp[mask] === -1) {
            dp[mask] = dp[mask ^ sub] + value[sub]
          } else {
            dp[mask] = Math.min(dp[mask], dp[mask ^ sub] + value[sub])
          }
        }
      }
    }
  }

  return dp[(1 << len) - 1]

  function getCount(num) {
    let count = 0
    while (num > 0) {
      count += num & 1
      num >>= 1
    }
    return count
  }
}

minimumIncompatibility([1, 2, 1, 4], 2)
