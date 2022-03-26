/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
  if (pattern[0] === pattern[1]) {
    let count = 1

    for (const ch of text) {
      count += ch === pattern[0] ? 1 : 0
    }

    return (count * (count - 1)) / 2
  }

  return Math.max(countSubstr(pattern[0] + text, pattern), countSubstr(text + pattern[1], pattern))

  function countSubstr(str, pattern) {
    const n = str.length
    const suf = Array(n + 1).fill(0)

    for (let i = n - 1; i >= 0; i--) {
      suf[i] = suf[i + 1] + (pattern[1] === str[i] ? 1 : 0)
    }

    let ans = 0

    for (let i = 0; i < n; i++) {
      if (str[i] === pattern[0]) ans += suf[i]
    }

    return ans
  }
}
