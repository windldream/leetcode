/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
// var findString = function (words, s) {
//   const n = words.length
//   let l = 0
//   let r = n - 1
//   while (l <= r) {
//     let mid = (l + r) >> 1
//     if (words[mid] === '') {
//       let lo = mid - 1
//       let hi = mid + 1
//       while (true) {
//         if (lo < l && hi > r) return -1
//         if (lo >= l && words[lo] !== '') {
//           mid = lo
//           break
//         }
//         if (hi <= r && words[hi] !== '') {
//           mid = hi
//           break
//         }
//         lo--
//         hi++
//       }
//     }
//     if (words[mid] === s) return mid
//     if (words[mid] > s) {
//       r = mid - 1
//     } else {
//       l = mid + 1
//     }
//   }
//   return -1
// }

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  const n = words.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    while (mid < r && words[mid] === '') mid++
    if (words[mid] === '') {
      r = ((l + r) >> 1) - 1
      continue
    }
    if (words[mid] === s) return mid
    if (words[mid] > s) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}

findString(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball')
