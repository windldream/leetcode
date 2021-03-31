/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    n = n & (n - 1)
    ans++
  }
  return ans
}

// var hammingWeight = function (n) {
//   let ans = 0
//   while (n) {
//     ans += n & 1
//     n >>>= 1
//   }
//   return ans
// }
