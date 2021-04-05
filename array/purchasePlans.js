/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const mod = 10 ** 9 + 7
  let ans = 0
  let l = 0
  let r = n - 1
  while (l < r) {
    if (nums[l] + nums[r] > target) {
      r--
    } else {
      ans = (ans + r - l) % mod
      l++
    }
  }
  return ans
}

purchasePlans([2, 5, 3, 5], 6)
