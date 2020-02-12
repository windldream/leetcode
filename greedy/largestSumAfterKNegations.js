/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length && K > 0; i++) {
    if (A[i] < 0) {
      A[i] = -A[i];
      K--;
    }
  }
  if (K === 0) {
    return A.reduce((prev, cur) => prev + cur, 0);
  } else {
    if (K % 2) {
      A.sort((a, b) => a - b);
      return A.reduce((prev, cur) => prev + cur, 0) - 2 * A[0];
    } else {
      return A.reduce((prev, cur) => prev + cur, 0);
    }
  }
};

console.log(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3));
