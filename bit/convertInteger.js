/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let i = 31
  let ans = 0
  while (i >= 0) {
    const aMask = A & (1 << i)
    const bMask = B & (1 << i)
    if (aMask !== bMask) ans++
    i--
  }
  return ans
}
