/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  if (A.length < 2) {
    return A.length;
  }
  const len = A.length,
    dp = Array(len).fill(0);

  dp[0] = 1;
  dp[1] = A[0] === A[1] ? 1 : 2;
  let res = Math.max(dp[0], dp[1]);
  for (let i = 2; i < len; i++) {
    if (compare(A[i - 2], A[i - 1]) * compare(A[i - 1], A[i]) === -1) {
      dp[i] = dp[i - 1] + 1;
      res = Math.max(res, dp[i]);
    } else if (compare(A[i], A[i - 1]) !== 0) {
      dp[i] = 2;
    }
  }

  return res;

  function compare(a, b) {
    return a > b ? 1 : a === b ? 0 : -1;
  }
};

console.log(maxTurbulenceSize([4, 8, 12, 16]));
