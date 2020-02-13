/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  const len = colsum.length,
    martix = Array(2)
      .fill(0)
      .map(() => Array(len).fill(0));
  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] === 1) {
      if (upper > lower) {
        martix[0][i] = 1;
        upper--;
      } else {
        martix[1][i] = 1;
        lower--;
      }
    } else if (colsum[i] === 2) {
      if (upper && lower) {
        martix[0][i] = 1;
        martix[1][i] = 1;
        upper--;
        lower--;
      } else {
        return [];
      }
    }
  }

  return upper === 0 && lower === 0 ? martix : [];
};

console.log(reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1]));
//  1 1 1 0 1
//  1 1 1
