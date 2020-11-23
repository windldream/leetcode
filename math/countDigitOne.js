/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let ans = 0
  let i = 1
  let num = n
  while (num) {
    const mod = num % 10
    num /= 10
    if (mod === 0) {
      ans += Math.trunc(num) * i
    } else if (mod === 1) {
      ans += Math.trunc(num) * i + (n % i) + 1
    } else if (mod > 1) {
      ans += Math.ceil(num) * i
    }
    num = Math.trunc(num)
    i *= 10
  }
  return ans
}

countDigitOne(13)
