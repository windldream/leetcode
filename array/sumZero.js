/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const ans = []
  for (let i = 0; i < n >> 1; i++) {
    ans.push(i + 1)
    ans.push(-(i + 1))
  }
  if (n % 2) {
    ans.push(0)
  }
  return ans
}
