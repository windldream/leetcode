/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const sum = [...new Set(nums)].reduce((prev, curr) => prev + curr, 0)
  const total = nums.reduce((prev, curr) => prev + curr, 0)
  const repeat = total - sum
  const sum2 = ((nums.length + 1) * nums.length) >> 1
  const lose = sum2 - sum
  return [repeat, lose]
}
