/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  const next = [-1]
  const len = s.length
  let i = 0
  let j = -1
  while (i < len) {
    if (j === -1 || s[i] === s[j]) {
      next[++i] = ++j
    } else {
      j = next[j]
    }
  }
  return s.substring(len - next[len])
}

longestPrefix('abababca')
