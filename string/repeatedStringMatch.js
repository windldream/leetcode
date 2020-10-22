/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  const m = a.length
  const n = b.length
  let len = 0
  let count = 1
  while (len <= 2 * m + n) {
    const str = a.repeat(count)
    if (str.includes(b)) return count
    len = str.length
    count++
  }
  return -1
}
