/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const ans = Array(n)
    .fill(0)
    .map((val, index) => index + 1)
  return ans.sort()
}
