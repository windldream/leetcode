/**
 * @param {number} n
 * @return {number}
 */
// 贪心算法
var integerBreak = function (n) {
  if (n <= 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  if (n === 4) {
    return 4;
  }

  let res = 1;
  while (n > 4) {
    n = n - 3;
    res *= 3;
  }

  return res * n;
};

console.log(integerBreak(10));