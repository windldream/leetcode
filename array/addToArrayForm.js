/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let carry = 0
  let i = A.length - 1
  K = K + ''
  let j = K.length - 1
  const ans = []
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = (i >= 0 ? A[i] : 0) + (j >= 0 ? +K[j] : 0) + carry
    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }
    ans.push(sum)
    i--
    j--
  }
  return ans.reverse()
}
