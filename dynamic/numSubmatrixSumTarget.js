/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  const row = matrix.length,
    col = matrix[0].length,
    preSum = Array(row + 1)
      .fill(0)
      .map(() => Array(col).fill(0));

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      preSum[i + 1][j] = preSum[i][j] + matrix[i][j];
    }
  }

  let res = 0,
    map = new Map();

  for (let i = 0; i < row; i++) {
    for (let j = i; j < row; j++) {
      map.clear();
      let sum = 0;
      for (let k = 0; k < col; k++) {
        sum += preSum[j + 1][k] - preSum[i][k];
        if (sum === target) {
          res++;
        }
        // 如果 sum - offset === target
        // 则 当前和为 sum 的列 到 （和为 offset 的列）的和（中间那部分）肯定为 target
        let offset = sum - target;
        if (map.has(offset)) {
          res += map.get(offset);
        }
        if (map.has(sum)) {
          map.set(sum, map.get(sum) + 1);
        } else {
          map.set(sum, 1);
        }
      }
    }
  }

  return res;
};

console.log(
  numSubmatrixSumTarget(
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    0
  )
);
