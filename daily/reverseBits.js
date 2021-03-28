/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// var reverseBits = function (n) {
//   const str = n.toString(2).split('').reverse().join('')
//   return parseInt(str.length < 32 ? str + '0'.repeat(32 - str.length) : str, 2)
// }

var reverseBits = function (n) {
  let ans = 0
  let power = 31
  while (n) {
    ans += ((n & 1) << power) >>> 0
    power--
    n = n >>> 1
  }
  return ans
}

reverseBits(4294967293)

// 1100
// 0011
