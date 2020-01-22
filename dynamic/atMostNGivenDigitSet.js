/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
var atMostNGivenDigitSet = function(D, N) {
  const len = (N + '').length,
    dp = Array(len + 1).fill(0),
    str = N + '';

  dp[len] = 1;
  for (let k = len - 1; k >= 0; k--) {
    for (let i = 0; i < D.length; i++) {
      if (+str[k] > +D[i]) {
        dp[k] += Math.pow(D.length, len - k - 1);
      } else if (+str[k] === +D[i]) {
        dp[k] += dp[k + 1];
      }
    }
  }

  for (let i = 1; i < len; i++) {
    dp[0] += Math.pow(D.length, i);
  }

  return dp[0];
};

console.log(atMostNGivenDigitSet(['3', '4', '8'], 4));
