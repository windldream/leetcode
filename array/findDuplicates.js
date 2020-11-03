/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i])
    if (nums[num - 1] > 0) {
      nums[num - 1] *= -1
    } else {
      res.push(num)
    }
  }
  return res
}
