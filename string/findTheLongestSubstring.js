/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const vowels = 'aeiou'
  const len = s.length
  const map = new Map()
  let state = 0
  let ans = 0
  map.set(0, -1)
  for (let i = 0; i < len; i++) {
    if (vowels.includes(s[i])) {
      state ^= 1 << (s[i].charCodeAt() - 'a'.charCodeAt())
    }
    if (map.has(state)) {
      ans = Math.max(ans, i - map.get(state))
    }
    if (!map.has(state)) {
      map.set(state, i)
    }
  }
  return ans
}

findTheLongestSubstring('eleetminicoworoep')
