/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const add = function (a, b) {
  while (b) {
    // 进位
    const c = (a & b) << 1
    // 非进位和
    a ^= b
    b = c
  }
  return a
}
