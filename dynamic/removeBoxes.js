/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
  const len = boxes.length,
    dp = [];

  for (let l = 0; l < len; l++) {
    dp[l] = [];
    for (let r = 0; r < len; r++) {
      dp[l][r] = Array(len).fill(0);
    }
  }

  return helper(boxes, dp, 0, len - 1, 0);

  // l 表示开始下标 r 表示结束下标 k表示与第 r 个元素相等的元素个数
  function helper(boxes, dp, l, r, k) {
    if (l > r) {
      return 0;
    }
    if (dp[l][r][k]) {
      return dp[l][r][k];
    }

    while (r > l && boxes[r] === boxes[r - 1]) {
      r--;
      k++;
    }

    dp[l][r][k] = helper(boxes, dp, l, r - 1, 0) + (k + 1) ** 2;
    for (let i = l; i < r; i++) {
      if (boxes[i] === boxes[r]) {
        dp[l][r][k] = Math.max(
          dp[l][r][k],
          helper(boxes, dp, i + 1, r - 1, 0) + helper(boxes, dp, l, i, k + 1)
        );
      }
    }

    return dp[l][r][k];
  }
};

console.log(removeBoxes([8, 1, 2, 10, 8, 5, 1, 10, 8, 4]));
