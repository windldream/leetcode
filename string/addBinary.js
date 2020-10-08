/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0
  let i = a.length
  let j = b.length
  if (i > j) {
    b = '0'.repeat(i - j) + b
  }
  if (j > i) {
    a = '0'.repeat(j - i) + a
  }
  const ans = []
  i = Math.max(i, j) - 1
  while (i >= 0) {
    let sum = carry + +a[i] + +b[i]
    if (sum >= 2) {
      sum = sum - 2
      carry = 1
    } else {
      carry = 0
    }
    ans.unshift(sum)
    i--
  }

  if (carry) {
    ans.unshift(carry)
  }
  if (ans[0] == '0') return '0'
  return ans.join('')
}
