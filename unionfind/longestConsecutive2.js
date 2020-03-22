/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  const unionFind = {};
  const count = {};

  for (const num of nums) {
    unionFind[num] = num;
    count[num] = 1;
  }

  let res = 1;
  for (const num of nums) {
    if (unionFind[num + 1] !== undefined) {
      res = Math.max(res, union(num, num + 1));
    }
  }
  return res;

  function find(i) {
    const x = unionFind[i];
    return x === i ? x : (unionFind[i] = find(x));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) return count[x];
    count[x] += count[y];
    unionFind[y] = x;
    return count[x];
  }
};
