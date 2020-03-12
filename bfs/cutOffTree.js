/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const m = forest.length;
  const n = forest[0].length;
  const trees = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 0) {
        trees.push([forest[i][j], i, j]);
      }
    }
  }

  let ans = 0;
  let sr = 0;
  let sc = 0;
  trees.sort((a, b) => a[0] - b[0]);
  for (const [val, i, j] of trees) {
    const dis = bfs(sr, sc, i, j);
    if (dis < 0) {
      return -1;
    }
    ans += dis;
    sr = i;
    sc = j;
  }
  return ans;

  function bfs(sr, sc, i, j) {
    const queue = [];
    const visited = new Set();
    queue.push([sr, sc, 0]);
    visited.add(sr + '$' + sc);

    while (queue.length) {
      const [r, c, dis] = queue.shift();
      if (r === i && j === c) return dis;
      for (let k = 0; k < 4; k++) {
        const y = r + dx[k];
        const x = c + dy[k];
        if (
          y < 0 ||
          y >= m ||
          x < 0 ||
          x >= n ||
          visited.has(y + '$' + x) ||
          forest[y][x] === 0
        )
          continue;
        queue.push([y, x, dis + 1]);
        visited.add(y + '$' + x);
      }
    }
    return -1;
  }
};
