/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  return helper(nums, 0, S);

  function helper(nums, index, sum) {
    if (index === nums.length) {
      if (sum === 0) {
        return 1;
      } else {
        return 0;
      }
    }
    return (
      helper(nums, index + 1, sum - nums[index]) +
      helper(nums, index + 1, sum + nums[index])
    );
  }
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
