/**
 * @param {number} num
 * @return {number}
 */
// var translateNum = function (num) {
//   const ans = new Set()
//   const str = num + ''
//   backtracking(0, '')
//   return ans.size

//   function backtracking(index, s) {
//     if (index >= str.length) {
//       ans.add(s)
//       return
//     }
//     const n = str[index]
//     if (n >= 1 && n < 3 && index + 1 < str.length) {
//       if ((n === '2' && +str[index + 1] < 6) || n === '1') {
//         const c = String.fromCharCode(n * 10 + +str[index] + 'a'.charCodeAt())
//         backtracking(index + 2, s + c)
//       }
//     }
//     const c = String.fromCharCode(+n + 'a'.charCodeAt())
//     backtracking(index + 1, s + c)
//   }
// }

var translateNum = function (num) {
  const str = num + ''
  let a = 1
  let b = 1
  for (let i = 2; i <= str.length; i++) {
    const n = str.substring(i - 2, i)
    const c = n >= 10 && n <= 25 ? a + b : a
    b = a
    a = c
  }
  return a
}
