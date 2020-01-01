/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = [],
    l2 = 0,
    l3 = 0,
    l5 = 0;
  dp[0] = 1;

  for (i = 1; i < n; i++) {
    const min = Math.min(dp[l2] * 2, dp[l3] * 3, dp[l5] * 5);

    // 使用if避免相等的元素重复
    if (min === dp[l2] * 2) {
      l2++;
    }
    if (min === dp[l3] * 3) {
      l3++;
    }
    if (min === dp[l5] * 5) {
      l5++;
    }
    dp[i] = min;
  }

  return dp[n - 1];
};

console.log(nthUglyNumber(491))