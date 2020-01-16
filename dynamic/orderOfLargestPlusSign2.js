/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
  const map = {},
    dp = [];
  let res = 0;

  mines.forEach(mine => {
    map[mine[0] + '$' + mine[1]] = 1;
  });

  for (let r = 0; r < N; r++) {
    dp[r] = Array(N).fill(0);
    let count = 0;
    for (let c = 0; c < N; c++) {
      if (!map[r + '$' + c]) {
        count += 1;
      } else {
        count = 0;
      }
      dp[r][c] = count;
    }

    count = 0;
    for (let c = N - 1; c >= 0; c--) {
      if (!map[r + '$' + c]) {
        count += 1;
      } else {
        count = 0;
      }
      dp[r][c] = Math.min(dp[r][c], count);
    }
  }

  for (let c = 0; c < N; c++) {
    let count = 0;
    for (let r = 0; r < N; r++) {
      if (!map[r + '$' + c]) {
        count += 1;
      } else {
        count = 0;
      }
      dp[r][c] = Math.min(dp[r][c], count);
    }

    count = 0;
    for (let r = N - 1; r >= 0; r--) {
      if (!map[r + '$' + c]) {
        count += 1;
      } else {
        count = 0;
      }
      dp[r][c] = Math.min(dp[r][c], count);
      res = Math.max(res, dp[r][c]);
    }
  }

  return res;
};

console.log(orderOfLargestPlusSign(5, [[4, 2]]));
