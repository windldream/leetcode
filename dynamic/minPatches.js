/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let res = 0,
    i = 0,
    miss = 1;
  while (miss <= n) {
    if (i < nums.length && nums[i] <= miss) {
      miss += nums[i++];
    } else {
      // 缺哪个数就添加哪个数 可以最大限度的增加范围
      miss += miss;
      res++;
    }
  }
  return res;
};
