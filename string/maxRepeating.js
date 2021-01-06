/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  const max = Math.trunc(sequence.length / word.length)
  for (let i = max; i > 0; i--) {
    const str = word.repeat(i)
    if (sequence.includes(str)) return i
  }
  return 0
};