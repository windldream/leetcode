/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  const dist = Array(m)
    .fill(0)
    .map(() => Array(n).fill(Infinity));
  queue.push([0, 0]);
  dist[0][0] = 0;

  while (queue.length) {
    const [r, c] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const m1 = r + dy[i];
      const n1 = c + dx[i];
      if (m1 < 0 || n1 < 0 || m1 >= m || n1 >= n) continue;
      const cost = dist[r][c] + (grid[r][c] === i + 1 ? 0 : 1);
      if (cost < dist[m1][n1]) {
        dist[m1][n1] = cost;
        queue.push([m1, n1]);
      }
    }
  }

  return dist[m - 1][n - 1];
};
