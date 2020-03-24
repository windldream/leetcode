/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const len = nums.length;
  if (len < 2) {
    return len === 1 ? nums[0] + '' : '';
  }
  nums.sort((a, b) => {
    return Number(b + '' + a) - Number(a + '' + b);
  });
  return +nums.join('') === 0 ? '0' : nums.join('');
};
