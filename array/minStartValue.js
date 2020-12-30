/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
  let ans = 1
  let sum = 0
  for (const num of nums) {
    sum += num
    if (sum < 1) {
      ans = Math.max(Math.abs(sum) + 1, ans)
    }
  }
  return ans
};