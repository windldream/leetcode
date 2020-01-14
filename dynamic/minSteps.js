/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let res = 0;

  // 把 n 分解成 m 个数字的乘积 且和最小
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      res += i;
      n = n / i;
    }
  }

  return res;
};

console.log(minSteps(9));
