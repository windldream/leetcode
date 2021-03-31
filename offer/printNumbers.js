/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let max = 0
  while (n) {
    max = max * 10 + 9
    n -= 1
  }

  return Array(max)
    .fill(0)
    .map((val, idx) => idx + 1)
}
