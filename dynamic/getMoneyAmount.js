/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  // len表示需要猜测多少次
  // 故错误的猜测只能是 len - 1次
  // len <= n - start + 1 表示从start开始猜测至多需要 n - start + 1 次
  // 由此可以得出 start <= n - len + 1
  // start + len - 1 表示从 start 猜测 len 次所能表示最大数为 start + len - 1；
  // 故支点 piv 要小于 start + len - 1
  // 例如 从 2 开始猜测 3 次 所能表示的最大数是 4 故支点要小于4
  for (let len = 2; len <= n; len++) {
    for (let start = 1; start <= n - len + 1; start++) {
      let min = Infinity;
      // 假设猜测第一次猜测数字为piv所需的最大花费
      for (let piv = start; piv < start + len - 1; piv++) {
        let res = piv + Math.max(dp[start][piv - 1], dp[piv + 1][start + len - 1]);
        min = Math.min(min, res);
      }
      dp[start][start + len - 1] = min;
    }
  }

  return dp[1][n];
};

console.log(getMoneyAmount(4));