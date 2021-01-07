/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let ans = 0
  for (const num of nums) {
    ans = ans ^ num
  }
  return ans
};