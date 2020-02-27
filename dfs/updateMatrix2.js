/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const row = matrix.length,
    col = matrix[0].length,
    queue = [],
    dir = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      } else {
        matrix[i][j] = row + col;
      }
    }
  }

  while (queue.length) {
    const [r, c] = queue.shift();
    for (let [x, y] of dir) {
      const i = r + x,
        j = c + y;
      if (
        i >= 0 &&
        i < row &&
        j >= 0 &&
        j < col &&
        matrix[i][j] > matrix[r][c] + 1
      ) {
        matrix[i][j] = matrix[r][c] + 1;
        queue.push([i, j]);
      }
    }
  }

  return matrix;
};
