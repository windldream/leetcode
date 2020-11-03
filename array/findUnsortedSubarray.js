/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const clone = nums.slice()
  clone.sort((a, b) => a - b)
  let l = nums.length,
    r = 0
  for (let i = 0; i < nums.length; i++) {
    if (clone[i] !== nums[i]) {
      l = Math.min(l, i)
      r = Math.max(r, i)
    }
  }
  return r - l >= 0 ? r - l + 1 : 0
}

findUnsortedSubarray([2, 3, 3, 2, 4])
