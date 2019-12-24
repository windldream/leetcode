/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let row = dungeon.length,
    col = dungeon[0].length,
    dp = [];

  for (let i = 0; i <= row; i++) {
    dp[i] = [];
  }

  dp[row - 1][col - 1] = dungeon[row - 1][col - 1] > 0 ? 1 : -dungeon[row - 1][col - 1] + 1;

  for (let i = 0; i <= col; i++) {
    dp[row][i] = Number.MAX_VALUE;
  }

  for (let j = 0; j <= row; j++) {
    dp[j][col] = Number.MAX_VALUE;
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      if (i === row - 1 && j === col - 1) {
        continue;
      }

      // 右边和下边的位置哪个到终点的生命值小，往哪边走
      // 当前位置所需的生命值为到终点所需的生命值减去当前所消耗的生命值
      dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
      if (dp[i][j] <= 0) {
        dp[i][j] = 1;
      }
    }
  }

  return dp[0][0];
};

console.log(calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5]
]))