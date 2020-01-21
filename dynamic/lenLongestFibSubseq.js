/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  const len = A.length,
    dp = [];
  let max = 0;

  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(2);
  }

  for (let i = 1; i < len; i++) {
    let l = 0,
      r = i - 1;
    while (l < r) {
      const sum = A[l] + A[r];
      if (sum === A[i]) {
        dp[r][i] = Math.max(dp[r][i], dp[l][r] + 1);
        max = Math.max(max, dp[r][i]);
        l++;
        r--;
      } else if (sum < A[i]) {
        l++;
      } else {
        r--;
      }
    }
  }

  return max;
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
