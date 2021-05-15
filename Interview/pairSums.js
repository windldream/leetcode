/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
  nums.sort((a, b) => a - b)
  const ans = []
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const val = nums[l] + nums[r]
    if (val === target) {
      ans.push([nums[l], nums[r]])
      l++
      r--
    } else if (val > target) {
      r--
    } else {
      l++
    }
  }
  return ans
}
