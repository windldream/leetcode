/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
  const len = A.length;
  if (len === K) {
    const sum = A.reduce((prev, curr) => prev + curr, 0);
    if (sum === 0) {
      return 1;
    } else if (sum === 1) {
      return 0;
    } else {
      return -1;
    }
  }

  let res = 0;
  for (let i = 0; i <= len - K; i++) {
    if (A[i] === 0) {
      for (let j = i; j < i + K; j++) {
        A[j] = A[j] ^ 1;
      }
      res++;
    }
  }

  const sum = A.reduce((prev, cur) => prev + cur, 0);
  return sum === len ? res : -1;
};

console.log(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3));
