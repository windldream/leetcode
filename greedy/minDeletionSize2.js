/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const row = A.length,
    col = A[0].length;
  if (col === 1) {
    if (row === 1) {
      return 0;
    }
    for (let r = 1; r < row; r++) {
      if (A[r] < A[r - 1]) {
        return 1;
      }
    }
    return 0;
  }

  let res = 0;
  A = Array(row)
    .fill(0)
    .map((val, index) => A[index].split(''));
  for (let c = 0; c < col; c++) {
    for (let r = 1; r < row; r++) {
      if (A[r][c] < A[r - 1][c]) {
        if (c > 0 && A[r].slice(0, c) > A[r - 1].slice(0, c)) {
          continue;
        }
        res++;
        for (let r = 0; r < row; r++) {
          A[r][c] = 'a';
        }
        break;
      }
    }
  }
  return res;
};

console.log(minDeletionSize(['jwkwdc', 'etukoz']));
// abcdefghijklmnopqrstuvwxyz
