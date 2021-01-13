/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function(n) {
  let a = 0
  let b = 0
  let ans = 0
  for (let i = 1; i <= n; i++) {
    if (i % 7 === 1) {
      a = a + 1
      ans += a
    } else if (i % 7 === 2) {
      b = a + 1
      ans += b
    } else {
      b = b + 1
      ans += b
    }
  }
  return ans
};