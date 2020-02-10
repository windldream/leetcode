/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  if (A.length === 0) {
    return 0;
  }

  const row = A.length,
    col = A[0].length;
  for (let i = 0; i < row; i++) {
    if (A[i][0] === 0) {
      let index = 0;
      while (index < col) {
        A[i][index] = A[i][index] ^ 1;
        index++;
      }
    }
  }

  let sum = row * 2 ** (col - 1);
  for (let i = 1; i < col; i++) {
    let count = 0;
    for (let j = 0; j < row; j++) {
      if (A[j][i] === 1) {
        count++;
      }
    }
    if (count <= row / 2) {
      count = row - count;
    }
    sum += count * 2 ** (col - i - 1);
  }

  return sum;
};

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0]
  ])
);
/**
 * [
 *  [0,0,1,1] 1111
 *  [1,0,1,0] 1001
 *  [1,1,0,0] 1111
 * ]
 */
