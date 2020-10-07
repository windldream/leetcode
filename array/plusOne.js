/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const ans = []
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry
    if (sum >= 10) {
      sum = sum - 10
      carry = 1
    } else {
      carry = 0
    }
    ans[i] = sum
  }

  if (carry) {
    ans.unshift(carry)
  }
  return ans
}
