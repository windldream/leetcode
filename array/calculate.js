/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let x = 1
  let y = 0
  for (const c of s) {
    if (c === 'A') {
      x = x * 2 + y
    } else {
      y = y * 2 + x
    }
  }
  return x + y
}
