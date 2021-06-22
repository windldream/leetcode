/**
 * @param {string} num
 * @return {string}
 */
// var largestOddNumber = function (num) {
//   let maxStr = ''
//   let preStr = ''
//   for (const c of num) {
//     if (Number(c) & 1) {
//       maxStr = preStr + c
//     }
//     preStr += c
//   }
//   return maxStr
// }

var largestOddNumber = function (num) {
  let n = num.length
  for (let i = n - 1; i >= 0; i--) {
    if (Number(num[i]) & 1) {
      return num.slice(0, i + 1)
    }
  }
  return ''
}
