/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  const ans = new Set()
  for (const word of A) {
    const key = getEqualWord(word)
    ans.add(key)
  }
  return ans.size

  function getEqualWord(word) {
    const len = word.length
    let even = []
    let odd = []
    for (let i = 0; i < len; i += 2) {
      even.push(word[i])
      odd.push(word[i + 1] || '')
    }

    even.sort()
    odd.sort()

    return even.join('') + odd.join('')
  }
}
