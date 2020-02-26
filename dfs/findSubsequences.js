/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = [],
    tmp = [],
    seen = {};
  dfs(nums, 0, tmp, res);
  return res;

  function dfs(nums, index, tmp, res) {
    if (tmp.length >= 2 && !seen[tmp.join('$')]) {
      res.push(tmp);
      seen[tmp.join('$')] = 1;
    }
    for (let i = index; i < nums.length; i++) {
      if (tmp.length && tmp[tmp.length - 1] > nums[i]) {
        continue;
      }
      tmp.push(nums[i]);
      dfs(nums, i + 1, tmp.slice(), res);
      tmp.pop();
    }
  }
};
