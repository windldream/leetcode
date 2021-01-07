/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = function(allowed, words) {
  return words.filter(word => {
    for (const c of word) {
      if (!allowed.includes(c)) return false
    }
    return true
  }).length
};