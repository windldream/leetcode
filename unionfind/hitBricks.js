/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  const m = grid.length;
  const n = grid[0].length;
  const nowRemain = new Set();
  const len = hits.length;
  const res = Array(len).fill(0);

  for (const [r, c] of hits) {
    grid[r][c] -= 1;
  }

  for (let col = 0; col < n; col++) {
    if (grid[0][col] === 1) {
      findRemain(0, col);
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    const [r, c] = hits[i];
    grid[r][c] += 1;
    if (grid[r][c] === 1) {
      const afterHitRemainSize = nowRemain.size;
      if (
        r === 0 ||
        (r > 0 && nowRemain.has(r - 1 + ',' + c)) ||
        (r < m - 1 && nowRemain.has(r + 1 + ',' + c)) ||
        (c > 0 && nowRemain.has(r + ',' + (c - 1))) ||
        (c < n - 1 && nowRemain.has(r + ',' + (c + 1)))
      ) {
        findRemain(r, c);
        res[i] = nowRemain.size - afterHitRemainSize - 1;
      }
    }
  }

  return res;

  function findRemain(r, c) {
    if (grid[r][c] !== 1 || nowRemain.has(r + ',' + c)) {
      return;
    }
    nowRemain.add(r + ',' + c);

    if (r > 0) {
      findRemain(r - 1, c);
    }
    if (c > 0) {
      findRemain(r, c - 1);
    }
    if (r < m - 1) {
      findRemain(r + 1, c);
    }
    if (c < n - 1) {
      findRemain(r, c + 1);
    }
  }
};
