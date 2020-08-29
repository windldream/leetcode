/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let ans = 0
  while (c !== 0 || a !== 0 || b !== 0) {
    const av = a & 1
    const bv = b & 1
    const cv = c & 1
    a >>= 1
    b >>= 1
    c >>= 1
    if ((av | bv) === cv) continue
    if (cv === 1) {
      ans++
    } else {
      if (av === 1) {
        ans++
      }
      if (bv === 1) {
        ans++
      }
    }
  }
  return ans
}
