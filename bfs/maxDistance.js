/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  let max = -1;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        count++;
        const [i2, j2] = getDis(i, j, grid);
        max = Math.max(max, Math.abs(i - i2) + Math.abs(j - j2));
      }
    }
  }

  return count === 0 || count === m * n ? -1 : max;

  function getDis(i, j, grid) {
    const queue = [];
    const visted = new Set();
    queue.push([i, j]);
    visted.add(i + '$' + j);

    while (queue.length) {
      for (let len = queue.length - 1; len >= 0; len--) {
        const [r, c] = queue.shift();
        if (grid[r][c] === 1) {
          return [r, c];
        }
        for (let d = 0; d < 4; d++) {
          const m = dir[d][0] + r;
          const n = dir[d][1] + c;
          if (
            m < 0 ||
            n < 0 ||
            m >= grid.length ||
            n >= grid[0].length ||
            visted.has(m + '$' + n)
          )
            continue;
          queue.push([m, n]);
          visted.add(m + '$' + n);
        }
      }
    }

    return [i, j];
  }
};
