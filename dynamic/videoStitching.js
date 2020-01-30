/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  const len = clips.length,
    dp = Array(T + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 1; i <= T; i++) {
    for (let j = 0; j < len; j++) {
      if (clips[j][0] <= i && clips[j][1] >= i) {
        dp[i] = Math.min(dp[i], dp[clips[j][0]] + 1);
      }
    }
  }
  return dp[T] === Infinity ? -1 : dp[T];
};

console.log(
  videoStitching(
    [
      [0, 1],
      [6, 8],
      [0, 2],
      [5, 6],
      [0, 4],
      [0, 3],
      [6, 7],
      [1, 3],
      [4, 7],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 4],
      [4, 5],
      [5, 7],
      [6, 9]
    ],
    9
  )
);
