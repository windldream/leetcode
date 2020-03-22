/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  const visited = new Set();
  const queue = [];
  queue.push(mat);
  visited.add(mat.toString());

  let step = 0;
  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const matrix = queue.shift();
      if (matrix.every(item => item.every(val => val === 0))) {
        return step;
      }
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          const copyMat = JSON.parse(JSON.stringify(matrix));
          reverse(copyMat, i, j);
          if (visited.has(copyMat.toString())) continue;
          queue.push(copyMat);
          visited.add(copyMat.toString());
        }
      }
    }
    step++;
  }
  return -1;

  function reverse(matrix, i, j) {
    matrix[i][j] = 1 - matrix[i][j];
    for (const [x, y] of dir) {
      const r = i + x;
      const c = j + y;
      if (r < 0 || c < 0 || r >= m || c >= n) continue;
      matrix[r][c] = 1 - matrix[r][c];
    }
  }
};

console.log(
  minFlips([
    [0, 0],
    [0, 1]
  ])
);
