/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const add = function(a, b) {
  while (b != 0) {
    const c = (a & b) << 1
    a = a ^ b
    b = c
  }
  return a
};