/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  nums.sort((a, b) => {
    return Number(a + "" + b) - Number(b + "" + a);
  });

  return nums.join("");
};
