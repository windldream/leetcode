/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  let ans = 0
  let i = 0
  while (i < 30) {
    let a = (num >> i) & 1
    let b = (num >> (i + 1)) & 1
    ans += (a << (i + 1)) + (b << i)
    i += 2
  }
  return ans
}
