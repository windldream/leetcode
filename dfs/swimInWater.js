/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  const stack = [[0, 0]];
  const visited = Array(m).fill(0).map(() => Array(n).fill(0));
  let res = 0;

  while (stack.length) {
    const [row, col] = stack.shift();
    res = Math.max(res, grid[row][col]);
    if (row === m - 1 && col === n - 1) {
      return res;
    }
    for (const [dx, dy] of dir) {
      const [r, c] = [row + dx, col + dy];
      if (r < 0 || r >= m || c < 0 || c >= n || visited[r][c]) continue;
      stack.push([r, c, grid[r][c]]);
      visited[r][c] = 1;
    }
    stack.sort((a, b) => a[2] - b[2]);
  }

  return res;
};