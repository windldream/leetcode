/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) {
    return -1;
  }

  const visited = new Set();
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ];
  const queue = [];
  queue.push([0, 0]);
  visited.add(0 + '$' + 0);

  let step = 0;
  while (queue.length) {
    step++;
    for (let len = queue.length - 1; len >= 0; len--) {
      const [i, j] = queue.shift();
      if (i === grid.length - 1 && j === grid[0].length - 1) {
        return step;
      }
      for (const [r, c] of dir) {
        const m = i + r;
        const n = j + c;
        if (
          m < 0 ||
          n < 0 ||
          m >= grid.length ||
          n >= grid[0].length ||
          grid[m][n] === 1 ||
          visited.has(m + '$' + n)
        )
          continue;
        queue.push([m, n]);
        visited.add(m + '$' + n);
      }
    }
  }
  return -1;
};
