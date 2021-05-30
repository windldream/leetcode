/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) === n
}

// n & (n - 1)
// 1000 8
// 100  4
// 10000 16
// 1000000 64
