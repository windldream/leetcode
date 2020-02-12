/**
 * @param {number[]} A
 * @return {number[]}
 */
var prevPermOpt1 = function(A) {
  const len = A.length;
  for (let i = len - 1; i >= 0; i--) {
    // 如果存在 A[i - 1] > A[i] 则必然存在解
    if (A[i - 1] > A[i]) {
      for (let j = len - 1; j > i - 1; j--) {
        if (A[j] < A[i - 1] && A[j] != A[j - 1]) {
          [A[j], A[i - 1]] = [A[i - 1], A[j]];
          return A;
        }
      }
    }
  }
  return A;
};

console.log(prevPermOpt1([3, 1, 1, 3]));
