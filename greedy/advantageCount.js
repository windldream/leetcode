/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  A.sort((a, b) => a - b);

  const len = A.length,
    res = [];
  for (let i = 0; i < len; i++) {
    let diff = Infinity,
      index = -1;
    for (let j = 0; j < A.length; j++) {
      if (B[i] < A[j] && diff > A[j] - B[i]) {
        diff = Math.min(A[j] - B[i]);
        index = j;
      }
    }
    if (index !== -1) {
      res.push(A[index]);
      A.splice(index, 1);
    } else {
      res.push(A[0]);
      A.splice(0, 1);
    }
  }

  return res;
};

console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));
