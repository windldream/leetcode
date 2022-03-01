/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const median = n & 1 ? nums[n >> 1] : (nums[n >> 1] + nums[(n >> 1) - 1]) / 2
  const smaller = nums.filter((num) => num < median)
  const greater = nums.filter((num) => num >= median)
  const ans = []

  while (smaller.length || greater.length) {
    if (smaller.length) ans.push(smaller.pop())
    if (greater.length) ans.push(greater.pop())
  }

  return ans
}
