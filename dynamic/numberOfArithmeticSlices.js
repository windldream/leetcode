/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  if (A.length < 3) {
    return 0;
  }
  const len = A.length;
  let count = 0;

  for (let i = 0; i < len - 2; i++) {
    const d = A[i + 1] - A[i];
    for (let j = i + 2; j < len; j++) {
      let m = 0;
      for (m = i + 1; m <= j; m++) {
        if (A[m] - A[m - 1] != d) {
          break;
        }
      }
      if (m > j) {
        count++;
      }
    }
  }
  return count;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));