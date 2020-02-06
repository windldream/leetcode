/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
  const len = word.length,
    dp = Array(301)
      .fill(0)
      .map(() =>
        Array(26)
          .fill(0)
          .map(() => Array(26).fill(0))
      );

  for (let i = 1; i <= 300; i++) {
    for (let l = 0; l < 26; l++) {
      for (let r = 0; r < 26; r++) {
        dp[i][l][r] = Infinity;
      }
    }
  }

  let res = Infinity;
  for (let i = 1; i <= len; i++) {
    const c = word[i - 1].charCodeAt() - 'A'.charCodeAt();
    for (let l = 0; l < 26; l++) {
      for (let r = 0; r < 26; r++) {
        if (dp[i - 1][l][r] !== Infinity) {
          // 移动左指
          dp[i][c][r] = Math.min(dp[i][c][r], dp[i - 1][l][r] + getDis(l, c));
          // 移动又指
          dp[i][l][c] = Math.min(dp[i][l][c], dp[i - 1][l][r] + getDis(r, c));
        }
        if (i === len) {
          res = Math.min(res, dp[i][c][r], dp[i][l][c]);
        }
      }
    }
  }

  return res;

  function getDis(a, b) {
    const x1 = Math.floor(a / 6),
      y1 = a % 6;
    const x2 = Math.floor(b / 6),
      y2 = b % 6;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
};
