/**
 * @param {string} S
 * @return {string}
 */
var makeLargestSpecial = function (S) {
  if (S.length === 0) return ''
  let count = 0
  let pos = 0
  const arr = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '0') {
      count--
    } else {
      count++
    }

    if (count === 0) {
      arr.push('1' + makeLargestSpecial(S.substr(pos + 1, i - pos - 1)) + '0')
      pos = i + 1
    }
  }

  arr.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
  })
  return arr.join('')
}
