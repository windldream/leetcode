/**
 * @param {number} n
 * @return {number}
 */
// 个位数有10种表示方法
// 二位数有9 * 9种表示方法 因为第一位数可以去1到9 第二位数取0-9之间除去第一位的数
// n不可能大于10
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 10;
  }
  let res = 10,
    prev = 9;

  for (let i = 2; i <= n; i++) {
    prev = prev * (9 - i + 2);
    res = prev + res;
  }

  return res;
};

console.log(countNumbersWithUniqueDigits(3));