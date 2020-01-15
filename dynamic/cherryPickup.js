/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  if (grid.length === 0) {
    return 0;
  }

  const len = grid.length,
    dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len; j++) {
      dp[i][j] = Array(len).fill(-Infinity);
    }
  }

  return Math.max(0, helper(0, 0, 0));

  function helper(r1, c1, c2) {
    let r2 = r1 + c1 - c2;
    if (
      r1 === len ||
      c1 === len ||
      r2 === len ||
      c2 === len ||
      grid[r1][c1] === -1 ||
      grid[r2][c2] === -1
    ) {
      return -666666;
    } else if (r1 === len - 1 && c1 === len - 1) {
      return grid[r1][c1];
    } else if (dp[r1][c1][c2] !== -Infinity) {
      return dp[r1][c1][c2];
    } else {
      let res = grid[r1][c1];
      if (c1 !== c2) {
        res += grid[r2][c2];
      }
      // 1. 一号向下 二号向右 2. 一号向右 二号向下 3. 一号向下 二号向下 4. 一号向右 二号向右
      res += Math.max(
        helper(r1 + 1, c1, c2 + 1),
        helper(r1, c1 + 1, c2),
        helper(r1 + 1, c1, c2),
        helper(r1, c1 + 1, c2 + 1)
      );
      dp[r1][c1][c2] = res;
      return res;
    }
  }
};

console.log(
  cherryPickup([
    [1, 1, -1],
    [1, -1, 1],
    [-1, 1, 1]
  ])
);
