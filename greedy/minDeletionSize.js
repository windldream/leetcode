/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const row = A.length,
    col = A[0].length;
  if (col === 1) {
    return 0;
  }
  let res = 0;
  for (let c = 0; c < col; c++) {
    for (let r = 1; r < row; r++) {
      if (A[r][c] < A[r - 1][c]) {
        res++;
        break;
      }
    }
  }
  return res;
};

console.log(minDeletionSize(['rrjk', 'furt', 'guzm']));
