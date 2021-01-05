/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  const len = abbr.length
  let reg = /\d/
  let i = 0;
  let j = 0
  while (i < len) {
    if (reg.test(abbr[i])) {
      let num = 0
      if (abbr[i] === '0') return false
      while (reg.test(abbr[i])) {
        num = num * 10 + +abbr[i++]
      }
      j += num
    } else {
      if (abbr[i] !== word[j]) return false
      i++
      j++
    }
  }

  return i === len && j === word.length
};