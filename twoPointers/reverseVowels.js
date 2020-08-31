/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let l = 0
  let r = s.length - 1
  let arr = s.split('')
  while (l < r) {
    if (vowels.includes(s[l].toLowerCase()) && vowels.includes(s[r].toLowerCase())) {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    } else if (vowels.includes(s[l].toLowerCase())) {
      r--
    } else if (vowels.includes(s[r].toLowerCase())) {
      l++
    } else {
      l++
      r--
    }
  }
  return arr.join('')
}
