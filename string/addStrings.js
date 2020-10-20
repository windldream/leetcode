/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0
  let i = num1.length - 1
  let j = num2.length - 1
  let ans = ''
  while (i >= 0 || j >= 0) {
    let num = +(num1[i] || 0) + +(num2[j] || 0) + carry
    if (num >= 10) {
      carry = Math.trunc(num / 10)
      num = num % 10
    } else {
      carry = 0
    }
    ans = num + ans
    i--
    j--
  }
  if (carry) {
    ans = carry + ans
  }
  return ans
}
