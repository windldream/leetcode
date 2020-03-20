/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ];
  const queue = [];
  const visited = new Set();
  queue.push([0, 0, k]);
  visited.add([0, 0, k].toString());

  let step = 0;
  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const [i, j, s] = queue.shift();
      if (i === m - 1 && j === n - 1) {
        return step;
      }
      for (const [x, y] of dir) {
        const r = i + x;
        const c = j + y;
        if (r < 0 || c < 0 || r >= m || c >= n) continue;
        if (
          grid[r][c] === 1 &&
          s > 0 &&
          !visited.has([r, c, s - 1].toString())
        ) {
          queue.push([r, c, s - 1]);
          visited.add([r, c, s - 1].toString());
        } else if (grid[r][c] === 0 && !visited.has([r, c, s].toString())) {
          queue.push([r, c, s]);
          visited.add([r, c, s].toString());
        }
      }
    }
    step += 1;
  }
  return -1;
};
