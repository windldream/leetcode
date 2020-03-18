/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        grid[i][j] = 0;
        count++;
      } else if (grid[i][j] === 0) {
        count++;
      }
    }
  }

  let step = 0;
  while (queue.length) {
    for (let k = queue.length - 1; k >= 0; k--) {
      const [i, j] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const r = dir[d][0] + i;
        const c = dir[d][1] + j;
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) continue;
        queue.push([r, c]);
        grid[r][c] = 0;
        count++;
      }
    }
    step++;
  }
  return count === m * n ? step === 0 ? 0 : step - 1 : -1;
};