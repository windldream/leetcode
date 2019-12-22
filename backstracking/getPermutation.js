/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let nums = [],
    used = [],
    str = '';

  for (let i = 0; i < n; i++) {
    nums[i] = i + 1;
  }

  return dfs(nums, used, n, k, 0, str);

  function dfs(nums, used, n, k, depth, str) {
    if (depth === n) {
      return str;
    }

    let ps = factorial(n - 1 - depth);
    for (let i = 0; i < n; i++) {
      if (used[i]) {
        continue;
      }

      if (ps < k) {
        k -= ps;
        continue;
      }

      str += nums[i];
      used[i] = 1;
      return dfs(nums, used, n, k, depth + 1, str);
    }
  }

  function factorial(n) {
    let res = 1;
    while (n) {
      res *= n;
      n--;
    }
    return res;
  }
};

console.log(getPermutation(4, 9))