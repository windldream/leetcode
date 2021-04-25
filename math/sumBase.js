/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let ans = 0
  while (n) {
    ans += n % k
    n = ~~(n / k)
  }
  return ans
}

// 34 % 6 = 4
// 5 % 6 =
