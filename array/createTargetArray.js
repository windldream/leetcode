/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const len = nums.length
  const ans = []
  for (let i = 0; i < len; i++) {
    ans.splice(index[i], 0, nums[i])
  }
  return ans
}
