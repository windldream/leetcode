/**
 * @param {number[]} A
 * @return {number}
 */
var countTriplets = function(A) {
  const len = A.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if ((A[i] & A[j] & A[k]) === 0) {
          res++;
        }
      }
    }
  }
  return res;
};

console.log(countTriplets([2, 1, 3]));
