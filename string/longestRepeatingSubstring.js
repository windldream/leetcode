/**
 * @param {string} S
 * @return {number}
 */
const longestRepeatingSubstring = function(S) {
  const len = S.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      const word = S.substring(i, j)
      if (!map.has(word)) map.set(word, 0)
      map.set(word, map.get(word) + 1)
    }
  }

  let ans = 0
  for (const [key, count] of map) {
    if (count > 1) {
      ans = Math.max(key.length, ans)
    }
  }
  return ans
};