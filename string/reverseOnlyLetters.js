/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  if (S.length === 0) return ''
  const reg = /[^a-zA-Z]/
  const reverse = S.split(reg).join('').split('').reverse()
  for (let i = 0; i < S.length; i++) {
    if (reg.test(S[i])) {
      reverse.splice(i, 0, S[i])
    }
  }

  return reverse.join('')
}

reverseOnlyLetters('7_28]')
