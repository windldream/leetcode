/**
 * @param {number} N
 * @return {number}
 */
var numDupDigitsAtMostN = function(N) {
  // 计算小于 N + 1 的不重复的数字的个数之和
  const str = N + 1 + '',
    len = str.length;
  if (len < 2) {
    return 0;
  }
  // 计算小于 len 位数字不重复的数字个数的和
  let res = 0;
  for (let i = 1; i < len; i++) {
    res += 9 * permutation(9, i - 1);
  }

  // 计算 len 位数字不重复的数的个数之和
  const seen = new Set();
  for (let i = 0; i < len; i++) {
    let j = i > 0 ? 0 : 1;
    for (; j < +str[i]; j++) {
      if (!seen.has(j)) {
        res += permutation(9 - i, len - i - 1);
      }
    }
    if (seen.has(+str[i])) {
      break;
    }
    seen.add(+str[i]);
  }

  return N - res;

  // m * m - 1 * m - 2 * m - n + 1
  function permutation(m, n) {
    let res = 1;
    for (let i = m - n + 1; i <= m; i++) {
      res *= i;
    }
    return res;
  }
};

console.log(numDupDigitsAtMostN(10));
