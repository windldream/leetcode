/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function (S, K) {
  if (K > 1) {
    return S.split('').sort().join('')
  }
  const len = S.length
  let ans = S
  let str = S
  while (true) {
    str = str.substring(1) + str[0]
    ans = str < ans ? str : ans
    if (str === S) break
  }
  return ans
}
