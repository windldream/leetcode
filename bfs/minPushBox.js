/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const visited = new Set();
  const queue = [];
  const start = []
  const target = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 'B') {
        start[0] = i;
        start[1] = j;
      }
      if (grid[i][j] === 'S') {
        start[2] = i;
        start[3] = j;
      }
      if (grid[i][j] === 'T') {
        target.push(i, j);
      }
    }
  }
  queue.push(start);
  visited.add(start.toString());

  let step = 0;
  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const [x1, y1, x2, y2] = queue.shift();
      if (x1 === target[0] && y1 === target[1]) {
        return step;
      }
      const nexts = getNexts(x1, y1, x2, y2);
      for (const [r1, c1, r2, c2] of nexts) {
        if (!visited.has([r1, c1, r2, c2].toString())) {
          queue.push([r1, c1, r2, c2]);
          visited.add([r1, c1, r2, c2].toString());
        }
      }
    }
    step++;
  }
  return -1;

  function getNexts(i, j, x, y) {
    const res = [];
    for (const [x1, y1] of dir) {
      const r = x1 + i;
      const c = y1 + j;
      if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === '#') continue;
      if (x1 === 0 && y1 === 1) {
        if (canArrive(x, y, i, j - 1, i, j)) {
          res.push([r, c, i, j - 1]);
        }
      }
      if (x1 === 0 && y1 === -1) {
        if (canArrive(x, y, i, j + 1, i, j)) {
          res.push([r, c, i, j + 1]);
        }
      }
      if (x1 === 1 && y1 === 0) {
        if (canArrive(x, y, i - 1, j, i, j)) {
          res.push([r, c, i - 1, j]);
        }
      }
      if (x1 === -1 && y1 === 0) {
        if (canArrive(x, y, i + 1, j, i, j)) {
          res.push([r, c, i + 1, j]);
        }
      }
    }
    return res;
  }

  function canArrive(i, j, i2, j2, u, v) {
    const queue = [];
    const visited = new Set();
    queue.push([i, j]);
    visited.add(i + '$' + j);

    while (queue.length) {
      for (let len = queue.length - 1; len >= 0; len--) {
        const [r, c] = queue.shift();
        if (r === i2 && c === j2) return true;
        for (const [x, y] of dir) {
          const x1 = r + x;
          const y1 = c + y;
          if (x1 < 0 || y1 < 0 || x1 >= m || y1 >= n || grid[x1][y1] === '#' || visited.has(x1 + '$' + y1) || (x1 === u && y1 === v)) continue;
          queue.push([x1, y1]);
          visited.add(x1 + '$' + y1);
        }
      }
    }
    return false;
  }
};

console.log(minPushBox([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "#", ".", ".", ".", ".", "."],
  [".", "T", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", "#", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "S", ".", "B", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]]))