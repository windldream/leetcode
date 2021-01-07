/**
 * @param {string} s
 * @return {number}
 */
var countDistinct = function(s) {
  const len = s.length
  const set = new Set()
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      set.add(s.substring(i, j))
    }
  }
  return set.size
};