/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const len = arr.length,
    dp = [];
  let ans = 1;

  for (let x of arr) {
    dp[x] = (dp[x - difference] || 0) + 1;
    ans = Math.max(ans, dp[x]);
  }

  return ans;
};
