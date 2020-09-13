/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length
  if (len === 0) return []

  let r = 0
  let ans = []
  const arr = []
  while (r < len) {
    arr.push(nums[r])
    if (arr.length === k) {
      ans.push(Math.max.apply(null, arr))
      arr.shift()
    }
    r++
  }
  return ans
}
