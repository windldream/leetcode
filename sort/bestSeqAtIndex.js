/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function(height, weight) {
  if (height.length === 0 || weight.length === 0) {
    return 0;
  }

  const arr = [];
  for (let i = 0; i < height.length; i++) {
    arr.push([height[i], weight[i]]);
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  const dp = [];
  dp[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[j][1] < arr[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max.apply(null, dp);
};
