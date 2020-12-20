/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const canConvert = function(str1, str2) {
  if (str1 === str2) return true
  const chars = new Set()
  for (const c of str2) {
    chars.add(c)
  }
  if (chars.size === 26) return false

  const ends = Array(26).fill(-1)
  for (let i = 0; i < str1.length; i++) {
    const index = str1[i].charCodeAt() - 'a'.charCodeAt()
    if (ends[index] !== -1 && str2[ends[index]] !== str2[i]) return false
    ends[index] = i
  }
  return true
};