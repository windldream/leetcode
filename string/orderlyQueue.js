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
  const ans = []
  let str = S
  while (true) {
    if (ans.includes(str)) break
    ans.push(str)
    str = str.substring(1) + str[0]
  }
  ans.sort()
  return ans[0]
}
