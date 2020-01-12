/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
  const dp = Array(32).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  let i = 30,
    sum = 0,
    prev_bit = 0;
  while (i >= 0) {
    if ((num & (1 << i)) !== 0) {
      sum += dp[i];
      if (prev_bit === 1) {
        sum--;
        break;
      }
      prev_bit = 1;
    } else {
      prev_bit = 0;
    }
    i--;
  }

  return sum + 1;
};

console.log(findIntegers(6));
