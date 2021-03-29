/**
 * @param {string} s
 * @return {string}
 */
// const replaceSpace = function (s) {
//   return s.replaceAll(' ', '%20')
// }

const replaceSpace = function (s) {
  let str = ''
  for (const c of s) {
    if (c === ' ') str += '%20'
    else str += c
  }
  return str
}
