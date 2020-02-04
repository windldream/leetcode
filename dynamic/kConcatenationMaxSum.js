/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  const len = arr.length,
    dp = Array(len).fill(0),
    sum = Array(len).fill(0);
  const M = 10 ** 9 + 7;
  dp[0] = arr[0];
  sum[0] = arr[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
    sum[i] = sum[i - 1] + arr[i];
  }
  const max = Math.max.apply(null, dp);
  if (k === 1) {
    return max;
  }
  return Math.max(
    max,
    (dp[len - 1] + sum[len - 1] * (k - 2) + Math.max.apply(null, sum)) % M,
    (dp[len - 1] + Math.max.apply(null, sum)) % M,
    0
  );
};
