/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
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
          const newMatrix = reverse(copyMat, i, j)
          if (visited.has(newMatrix.toString())) continue;
          queue.push(newMatrix);
          visited.add(newMatrix.toString());
        }
      }
    }
    step++;
  }
  return step;

  function reverse(matrix, i, j) {
    for (let k = 0; k < m; k++) {
      matrix[k][j] = +!matrix[k][j]
    }
    for (let k = 0; k < n; k++) {
      if (k === j) continue;
      matrix[i][k] = +!matrix[i][k]
    }
  }
};