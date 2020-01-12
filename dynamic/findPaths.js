/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
  if (N === 0) {
    return 0;
  }
  const dp = [],
    M = 10 ** 9 + 7;
  let res = 0;

  for (let s = 0; s < N; s++) {
    dp[s] = [];
    for (let i = 0; i < m + 2; i++) {
      dp[s][i] = Array(n + 2).fill(0);
    }
  }
  dp[0][i + 1][j + 1] = 1;

  if (i === 0) {
    res++;
  }
  if (i === m - 1) {
    res++;
  }
  if (j === 0) {
    res++;
  }
  if (j === n - 1) {
    res++;
  }

  for (let s = 1; s < N; s++) {
    for (let mi = 1; mi <= m; mi++) {
      for (let ni = 1; ni <= n; ni++) {
        dp[s][mi][ni] =
          (dp[s - 1][mi - 1][ni] +
            dp[s - 1][mi + 1][ni] +
            dp[s - 1][mi][ni - 1] +
            dp[s - 1][mi][ni + 1]) %
          M;
        if (mi === 1) {
          res = (res + dp[s][mi][ni]) % M;
        }
        if (mi === m) {
          res = (res + dp[s][mi][ni]) % M;
        }
        if (ni === 1) {
          res = (res + dp[s][mi][ni]) % M;
        }
        if (ni === n) {
          res = (res + dp[s][mi][ni]) % M;
        }
      }
    }
  }

  return res;
};

console.log(findPaths(2, 2, 2, 0, 0));
