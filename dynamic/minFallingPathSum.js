/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  const len = A.length;

  for (let r = len - 2; r >= 0; r--) {
    for (let c = 0; c < len; c++) {
      let normal = A[r + 1][c];
      if (c > 0) {
        normal = Math.min(normal, A[r + 1][c - 1]);
      }
      if (c + 1 < len) {
        normal = Math.min(normal, A[r + 1][c + 1]);
      }
      A[r][c] += normal;
    }
  }

  return Math.min.apply(null, A[0]);
};

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
