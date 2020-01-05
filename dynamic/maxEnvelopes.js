/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length < 2) {
    return envelopes.length;
  }

  envelopes.sort((a, b) => a[0] - b[0]);
  let len = envelopes.length,
    dp = [];

  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(null, dp);
};

console.log(maxEnvelopes([
  [2, 100],
  [3, 200],
  [4, 300],
  [5, 500],
  [5, 400],
  [5, 250],
  [6, 370],
  [6, 360],
  [7, 380]
]))