/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => a - b);
  for (let i = A.length - 1; i >= 2; i--) {
    const a = A[i];
    const b = A[i - 1];
    const c = A[i - 2];
    if (a < b + c) {
      return a + b + c;
    }
  }
  return 0;
};
