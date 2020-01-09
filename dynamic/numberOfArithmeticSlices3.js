/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  if (A.length < 3) {
    return 0;
  }
  const len = A.length,
    dp = Array(len).fill(0).map(() => new Map());
  let count = 0;

  // dp[i] 表示以 i 结尾的位置所包含的公差为 x 的弱等差数列的个数
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i;j++) {
      let x = A[i] - A[j];
      if (dp[i].has(x)) {
        dp[i].set(x, dp[i].get(x) + 1);
      } else {  
        dp[i].set(x, 1);
      }

      // dp[j] 表示以 j 结尾的位置所包含的公差为 x 的弱等差数列的个数
      // 因此 需要更新以 i 结尾的位置的公差为 x 的弱等差数列的个数
      if (dp[j].has(x)) {
        dp[i].set(x, dp[i].get(x) + dp[j].get(x));
        count += dp[j].get(x);
      }
    }
  }

  return count;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 5]))