/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = function(s) {
  const n = s.length
  let start = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === ' ') {
      reverse(s, start, i - 1)
      start = i + 1
    }
  }
  reverse(s, start, n - 1)
  reverse(s, 0, n - 1)

  function reverse(s, start, end) {
    while (start < end) {
      [s[start], s[end]] = [s[end], s[start]]
      start++
      end--
    }
  }
};