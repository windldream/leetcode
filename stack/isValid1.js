/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  while (S && S.indexOf('abc') > -1) {
    S = S.replace(/abc/, '')
  }
  return S === ''
}
