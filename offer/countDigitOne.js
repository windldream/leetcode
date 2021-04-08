/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let ans = 0
  let carry = 1
  let num = n
  while (num) {
    const mod = num % 10
    num = num / 10
    if (mod === 0) {
      ans += Math.trunc(num) * carry
    } else if (mod === 1) {
      ans += Math.trunc(num) * carry + (n % carry) + 1
    } else {
      ans += Math.ceil(num) * carry
    }
    num = ~~num
    carry *= 10
  }
  return ans
}
