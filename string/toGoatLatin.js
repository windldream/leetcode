/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  const arr = S.split(' ')
  let ans = []
  let count = 1
  for (const word of arr) {
    if (vowels.includes(word[0])) {
      ans.push(word + 'ma' + 'a'.repeat(count))
    } else {
      ans.push(word.substring(1) + word[0] + 'ma' + 'a'.repeat(count))
    }
    count++
  }
  return ans.join(' ')
}
