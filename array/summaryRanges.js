/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let r, str = nums[i] + "";
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      r = nums[++i] + "";
    }
    if (r) {
      res.push(str + "->" + r)
    } else {
      res.push(str)
    }
  }
  return res;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));