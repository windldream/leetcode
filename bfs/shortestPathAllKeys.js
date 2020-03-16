/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
  grid = grid.map(str => str.split(''));
  const dir = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ];

  const queue = [];
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  let startR = -1;
  let startC = -1;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === '@') {
        startR = r;
        startC = c;
      }
      if (grid[r][c] >= 'a' && grid[r][c] <= 'f') {
        count++;
      }
    }
  }
  const visited = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(1 << count).fill(0))
    );
  queue.push([startR, startC, 0]);
  visited[startR][startC][0] = 1;

  const target = (1 << count) - 1;
  let step = -1;
  while (queue.length) {
    step++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let [y, x, s] = queue.shift();
      if (s === target) {
        return step;
      }
      for (let k = 0; k < dir.length; k++) {
        let state = s;
        const r = dir[k][0] + y;
        const c = dir[k][1] + x;
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === '#') continue;
        const w = grid[r][c];
        if (w >= 'a' && w <= 'f') {
          state = state | (1 << (w.charCodeAt() - 'a'.charCodeAt()));
        }
        if (visited[r][c][state]) continue;
        if (
          w >= 'A' &&
          w <= 'F' &&
          (state | (1 << (w.charCodeAt() - 'A'.charCodeAt()))) != state
        ) {
          continue;
        }
        queue.push([r, c, state]);
        visited[r][c][state] = 1;
      }
    }
  }
  return -1;
};
