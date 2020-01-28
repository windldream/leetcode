/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  const len = A.length,
    odd = Array(len).fill(false),
    even = Array(len).fill(false),
    map = new Map();
  map.set(A[len - 1], len - 1);
  odd[len - 1] = true;
  even[len - 1] = true;

  for (let index = len - 2; index >= 0; index--) {
    let min = Infinity,
      nextIndex = -1;
    for (let i = index + 1; i < len; i++) {
      if (A[i] >= A[index]) {
        if (A[i] < min) {
          min = A[i];
          nextIndex = i;
        }
      }
    }

    let max = -Infinity,
      nextIndex1 = -1;
    for (let i = index + 1; i < len; i++) {
      if (A[i] <= A[index]) {
        if (A[i] > max) {
          max = A[i];
          nextIndex1 = i;
        }
      }
    }

    if (nextIndex !== -1) {
      odd[index] = even[nextIndex];
    }

    if (nextIndex1 !== -1) {
      even[index] = odd[nextIndex1];
    }
  }

  let res = 0;
  for (const item of odd) {
    if (item) {
      res++;
    }
  }
  return res;
};

console.log(oddEvenJumps([10, 13, 12, 14, 15]));
