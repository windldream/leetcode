/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function (nums1, nums2) {
  const n = nums1.length
  const dp = Array(1 << n).fill(Infinity)
  dp[0] = 0
  for (let mask = 1; mask < 1 << n; mask++) {
    const count = countBit(mask)
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        dp[mask] = Math.min(dp[mask], dp[mask ^ (1 << i)] + (nums1[count - 1] ^ nums2[i]))
      }
    }
  }
  return dp[(1 << n) - 1]

  function countBit(num) {
    let cnt = 0
    while (num) {
      num = num & (num - 1)
      cnt++
    }
    return cnt
  }
}

minimumXORSum([1, 2], [2, 3])
