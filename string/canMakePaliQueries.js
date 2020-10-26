/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  const len = s.length
  const states = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    states[i + 1] = states[i] ^ (1 << (s[i].charCodeAt() - 'a'.charCodeAt()))
  }

  const ans = []
  for (const [l, r, k] of queries) {
    let state = states[r + 1] ^ states[l]
    let count = 0
    while (state !== 0) {
      count += state & 1
      state = state >> 1
    }
    ans.push(count >> 1 <= k)
  }
  return ans
}
