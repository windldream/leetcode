/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  const len = arr.length,
    dp = Array(len).fill(0),
    temp = [];

  for (let i = 0; i < len; i++) {
    temp.push(arr[i], i);
  }
  temp.push((a, b) => a[0] - b[0]);

  let res = 0;
  for (let i = 0; i < len; i++) {
    const index = temp[i][1];
    dp[index] = 1;
    // 往左跳
    for (let j = index - 1; j >= Math.max(index - d, 0); j--) {
      if (arr[j] >= arr[index]) {
        break;
      }
      if (dp[j] !== 0) {
        dp[index] = Math.max(dp[index], 1 + dp[j]);
      }
    }

    // 往右跳
    for (let j = index + 1; j <= Math.min(index + d, len - 1); j++) {
      if (arr[j] >= arr[index]) {
        break;
      }
      if (dp[j] !== 0) {
        dp[index] = Math.max(dp[index], 1 + dp[j]);
      }
    }
    res = Math.max(res, dp[index]);
  }

  return res;
};
