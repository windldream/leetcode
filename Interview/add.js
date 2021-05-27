/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  let sum = 0
  let carry = 0
  while (b !== 0) {
    sum = a ^ b
    carry = (a & b) << 1
    a = sum
    b = carry
  }
  return a
}

// 6 110
// 4 100
// 2 010
// 8 1000
// 10 1100
// 0
