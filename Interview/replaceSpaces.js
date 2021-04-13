/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
// var replaceSpaces = function (S, length) {
//   let diff = length - S.replace(/\s+/g, '').length
//   let ans = ''
//   for (const c of S) {
//     if (c !== ' ') ans += c
//     else if (diff > 0) {
//       ans += '%20'
//       diff -= 1
//     }
//   }
//   return ans
// }

var replaceSpaces = function (S, length) {
  return S.substring(0, length).replace(/\s/g, '%20')
}

replaceSpaces('Mr John Smith    ', 13)
