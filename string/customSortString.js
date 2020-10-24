/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  const map = Array(26).fill(26)
  for (let i = 0; i < S.length; i++) {
    map[S[i].charCodeAt() - 'a'.charCodeAt()] = i
  }
  const arr = T.split('')
  arr.sort((a, b) => {
    const key1 = a.charCodeAt() - 'a'.charCodeAt()
    const key2 = b.charCodeAt() - 'a'.charCodeAt()
    return map[key1] - map[key2]
  })
  return arr.join('')
}

customSortString('exv', 'xwvee')
