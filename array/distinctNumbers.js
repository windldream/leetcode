/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function (nums, k) {
  let l = 0
  let r = 0
  let diff = 0
  const ans = []
  const counter = Array(10001).fill(0)
  while (r < nums.length) {
    counter[nums[r]] += 1
    if (counter[nums[r]] === 1) diff += 1
    if (l <= r && r - l + 1 === k) {
      ans.push(diff)
      counter[nums[l]] -= 1
      if (counter[nums[l]] === 0) diff -= 1
      l++
    }
    r++
  }
  return ans
}
