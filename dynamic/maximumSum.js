/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  const len = arr.length,
    sum = Array(len).fill(0),
    dp = Array(len).fill(0);

  sum[0] = arr[0];
  dp[0] = -Infinity;
  for (let i = 1; i < len; i++) {
    // 不删除的情况下 要么是以 i 结尾的 要么是以 i 开始的
    sum[i] = Math.max(sum[i - 1] + arr[i], arr[i]);
    // 要没删除 当前元素 要么不删除
    dp[i] = Math.max(dp[i - 1] + arr[i], sum[i - 1]);
  }

  let max = -Infinity;
  for (let i = 0; i < len; i++) {
    max = Math.max.call(null, max, sum[i], dp[i]);
  }
  return max;
};

console.log(maximumSum([1, -2, -2, 3]));
