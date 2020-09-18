/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  for (const c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) return c
  }
  return ' '
}
