/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const len = A.length;

  let min = Infinity;
  label: for (let k = 1; k <= 6; k++) {
    let a = 0,
      b = 0;
    for (let i = 0; i < len; i++) {
      if (A[i] === k || B[i] === k) {
        if (A[i] !== k) {
          a++;
        }
        if (B[i] !== k) {
          b++;
        }
      } else {
        continue label;
      }
    }
    min = Math.min(min, a, b);
  }

  return min === Infinity ? -1 : min;
};

console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));
