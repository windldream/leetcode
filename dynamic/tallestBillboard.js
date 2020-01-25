/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
  const len = rods.length,
    memo = Array(len)
      .fill(0)
      .map(() => Array(5000).fill(0));

  return dp(rods, 0, 5000);

  function dp(rods, i, s) {
    // 5000 作为一个平衡值
    if (i === rods.length) {
      return s === 5000 ? 0 : -Infinity;
    } else if (memo[i][s]) {
      return memo[i][s];
    } else {
      // rods[i] === 0
      let res = dp(rods, i + 1, s);
      // 减去左边选择的
      res = Math.max(res, dp(rods, i + 1, s - rods[i]));
      // 加上右边选择的 如果存在 rods[i] 能维持平衡 则这个 rods[i] 就符合选择
      res = Math.max(res, rods[i] + dp(rods, i + 1, s + rods[i]));
      memo[i][s] = res;
      return res;
    }
  }
};

console.log(tallestBillboard([1, 2, 3, 4, 5, 6]));
