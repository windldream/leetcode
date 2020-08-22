/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stack = []
  let i = 0

  while (i < S.length) {
    if (stack.length && stack[stack.length - 1] === S[i]) {
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }

  return stack.join('')
}
