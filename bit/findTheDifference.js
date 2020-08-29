/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let init = 0
  for (const c of s + t) {
    init ^= c.charCodeAt() - 'a'.charCodeAt()
  }

  return String.fromCharCode(init)
}
