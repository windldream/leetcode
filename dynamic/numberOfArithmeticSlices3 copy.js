/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  if (A.length < 3) {
    return 0;
  }
  const len = A.length;
  let count = 0,
    dp = 0;

  for (let i = 2; i < len; i++) {
    if (A[i - 2] - A[i - 1] === A[i - 1] - A[i]) {
      dp++;
      count += dp;
    } else {
      dp = 0;
    }
  }

  return count;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 8, 9, 10]));