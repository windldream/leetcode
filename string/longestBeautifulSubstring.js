/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const n = word.length
  let r = 0
  let ans = 0
  let str = ''
  const hasVowels = Array(5).fill(false)
  while (r < n) {
    str += word[r]
    const index = vowels.indexOf(word[r])
    hasVowels[index] = true
    if (r > 0 && word[r - 1] > word[r]) {
      str = word[r]
      hasVowels.fill(false)
      hasVowels[index] = true
    }
    if (hasVowels.every((item) => item)) {
      ans = Math.max(ans, str.length)
    }
    r++
  }
  return ans
}

longestBeautifulSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu')
