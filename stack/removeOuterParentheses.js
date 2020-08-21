/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  const stack = []
  let ans = ''

  for (let i = 0; i < S.length; i++) {
    if (S[i] === ')') {
      stack.pop()
    }
    if (stack.length) {
      ans += S[i]
    }
    if (S[i] === '(') {
      stack.push(S[i])
    }
  }

  return ans
}
