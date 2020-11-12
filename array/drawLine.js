/**
 * @param {number} length
 * @param {number} w
 * @param {number} x1
 * @param {number} x2
 * @param {number} y
 * @return {number[]}
 */
var drawLine = function (length, w, x1, x2, y) {
  const res = Array(length).fill(0)
  for (let i = x1; i <= x2; i++) {
    const index = Math.trunc((w / 32) * y) + Math.trunc(i / 32)
    res[index] |= 1 << (31 - (i % 32))
  }
  return res
}
