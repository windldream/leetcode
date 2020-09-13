/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  const MOD = BigInt(10 ** 9 + 7)
  nums.sort((a, b) => a - b)
  if (nums[0] * 2 > target) return 0
  let l = 0
  let r = nums.length - 1
  let ans = BigInt(0)
  while (l <= r) {
    if (nums[l] + nums[r] <= target) {
      ans = (ans + getCount(2, r - l)) % MOD
      l++
    } else {
      r--
    }
  }
  return ans

  function getCount(x, n) {
    if (n === 0) return BigInt(1)
    let y = getCount(x, n >> 1)
    return n & 1 ? BigInt(y) * BigInt(y) * BigInt(x) : BigInt(y) * BigInt(y)
  }
}
