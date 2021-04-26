/**
 * @param {number} length
 * @param {number} w
 * @param {number} x1
 * @param {number} x2
 * @param {number} y
 * @return {number[]}
 */
var drawLine = function (length, w, x1, x2, y) {
  const offset = ~~((y * w) / 32)
  const ans = Array(length).fill(0)
  for (let i = x1; i <= x2; i++) {
    const index = offset + ~~(i / 32)
    ans[index] |= 1 << (31 - (i % 32))
  }
  return ans
}
