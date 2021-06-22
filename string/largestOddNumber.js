/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let maxStr = ''
  let preStr = ''
  for (const c of num) {
    if (Number(c) & 1) {
      maxStr = preStr + c
    }
    preStr += c
  }
  return maxStr
}
