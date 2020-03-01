/**
 * @param {number[][]} grid
 * @return {number}
 */
var containVirus = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let totalWalls = 0;

  while (true) {
    const visited = new Set();
    const nexts = [];
    let virusArea = [];
    let blockIndex = -1;
    let blockWalls = -1;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const key = i + '$' + j;
        if (grid[i][j] !== 1 || visited.has(key)) continue;
        const curr = [];
        const next = new Set();
        const compute = {
          walls: 0
        };
        getArea(i, j, m, n, grid, visited, curr, next, compute);
        if (next.size === 0) continue;
        if (nexts.length === 0 || next.size > nexts[blockIndex].size) {
          virusArea = curr;
          blockIndex = nexts.length;
          blockWalls = compute.walls;
        }
        nexts.push(next);
      }
    }

    if (nexts.length === 0) break;

    totalWalls += blockWalls;
    for (let i = 0; i < nexts.length; i++) {
      if (i === blockIndex) {
        for (const key of virusArea) {
          const x = key.split('$')[0];
          const y = key.split('$')[1];
          grid[x][y] = 2;
        }
      } else {
        for (const key of nexts[i]) {
          const x = key.split('$')[0];
          const y = key.split('$')[1];
          grid[x][y] = 1;
        }
      }
    }
  }

  return totalWalls;

  function getArea(x, y, m, n, grid, visited, curr, next, compute) {
    if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 2) return;
    const key = x + '$' + y;
    // 碰到未感染区域需要同时计算墙的数量
    if (grid[x][y] === 0) {
      compute.walls += 1;
      next.add(key);
      return;
    }

    if (visited.has(key)) return;
    visited.add(key);
    curr.push(key);
    getArea(x - 1, y, m, n, grid, visited, curr, next, compute);
    getArea(x + 1, y, m, n, grid, visited, curr, next, compute);
    getArea(x, y - 1, m, n, grid, visited, curr, next, compute);
    getArea(x, y + 1, m, n, grid, visited, curr, next, compute);
  }
};
