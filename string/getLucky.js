/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  const baseCode = 'a'.charCodeAt() - 1
  let str = ''

  for (const c of s) {
    str += c.charCodeAt() - baseCode
  }

  while (k) {
    let sum = 0
    for (const c of str) {
      sum += +c
    }
    k--
    str = sum + ''
  }

  return +str
}
