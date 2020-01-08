/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  if (A.length < 3) {
    return 0;
  }
  const len = A.length,
    dp = [];
  let count = 0;

  for (let i = 0; i < len - 2; i++) {
    dp[i] = [];
    const d = A[i + 1] - A[i];
    for (j = i + 2; j < len; j++) {
      if (dp[i][j - 1] && (A[j] - A[j - 1] === d)) {
        dp[i][j] = 1;
        count++;
        continue;
      }
      if (!dp[i][j - 1] && A[i + 2] - A[i + 1] === d) {
        dp[i][i + 2] = 1;
        count++;
      } else {
        break;
      }
    }
  }

  return count;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 8, 9, 10]));