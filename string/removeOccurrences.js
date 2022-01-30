/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  const n = part.length
  let res = s

  while (res.includes(part)) {
    const index = res.indexOf(part)
    res = res.substring(0, index) + res.substring(index + n)
  }
  return res
}
