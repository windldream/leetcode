/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
  const len = arr.length,
    dp = Array(len)
      .fill(0)
      .map(() => Array(len).fill(Infinity));
  for (let c = 0; c < len; c++) {
    dp[len - 1][c] = 0;
  }
  dp[-1] = Array(len).fill(Infinity);
  arr[len] = Array(len).fill(0);
  for (let l = len - 1; l >= 0; l--) {
    for (let c = 0; c < len; c++) {
      for (let c1 = 0; c1 < len; c1++) {
        if (c1 === c) {
          continue;
        }
        dp[l - 1][c] = Math.min(dp[l - 1][c], dp[l][c1] + arr[l][c1]);
      }
    }
  }

  return Math.min.apply(null, dp[-1]);
};
console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
