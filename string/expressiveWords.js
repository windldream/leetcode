/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (S, words) {
  const m = S.length
  let ans = 0
  label: for (const word of words) {
    if (word === S) {
      ans++
    } else {
      if (word.length >= m) continue
      let i = 0
      let j = 0
      while (i < word.length && j < m) {
        if (word[i] === S[j]) {
          let index = i
          while (word[index] === word[i]) i++
          let index1 = j
          while (word[index] === S[j]) j++
          if (i - index > j - index1 || (j - index1 < 3 && i - index !== j - index1)) continue label
        } else {
          continue label
        }
      }
      if (i === word.length && j === m) ans++
    }
  }
  return ans
}

expressiveWords('dddiiiinnssssssoooo', [
  'dinnssoo',
  'ddinso',
  'ddiinnso',
  'ddiinnssoo',
  'ddiinso',
  'dinsoo',
  'ddiinsso',
  'dinssoo',
  'dinso'
])
