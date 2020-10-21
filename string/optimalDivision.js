/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  if (nums.length === 1) {
    return nums[0] + ''
  }
  return getMax(nums)

  function getMax(nums) {
    if (nums.length === 0) return ''
    if (nums.length === 1) return nums[0] + ''
    if (nums.length === 2) return nums[0] + '/' + nums[1]
    return nums.shift() + '/' + '(' + nums.join('/') + ')'
  }
}

optimalDivision([6, 2, 3, 4, 5])
