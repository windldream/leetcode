/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = function(s) {
  const strs = s.join('').split(' ').reverse().join(' ')
  for (let i = 0; i < strs.length; i++) {
    s[i] = strs[i]
  }
};