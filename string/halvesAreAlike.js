/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const len = s.length
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let half = 0
  let total = 0
  for (let i = 0; i < len; i++) {
    const isHas = vowels.includes(s[i].toLowerCase())
    if (i < (len >> 1)) {
      half += isHas
    }
    total += isHas
  }

  return total - half === half
};