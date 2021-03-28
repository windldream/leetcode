/**
 * @param {string} s
 * @return {string}
 */
// var shortestPalindrome = function (s) {
//   const reverseStr = s.split('').reverse().join('')
//   const n = s.length
//   for (let i = n - 1; i >= 0; i--) {
//     if (s.substring(0, i + 1) === reverseStr.substring(n - i - 1)) return reverseStr.substring(0, n - i - 1) + s
//   }
// }

var shortestPalindrome = function (s) {
  const n = s.length
  if (n <= 1) return 0
  const str = Array(n * 2 + 1).fill(0)
  for (let i = 0; i < n; i++) {
    str[(i << 1) | 1] = s[i]
  }

  let l = 0
  let r = -1
  const m = str.length
  const dp = Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    if (i < r) {
      dp[i] = Math.min((r - i) * 2 + 1, dp[l + r - i])
    } else {
      dp[i] = 1
    }
    let left = i - (dp[i] >> 1) - 1
    let right = i + (dp[i] >> 1) + 1
    while (left >= 0 && right < m && str[left] === str[right]) {
      left--
      right++
    }
    dp[i] = right - left - 1
    if (right > r) {
      r = right - 1
      l = left + 1
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (isPalindrome(0, i, m, dp)) {
      const str = s.substring(i + 1)
      return str.split('').reverse().join('') + s
    }
  }
  return ''

  function isPalindrome(l, r, m, dp) {
    l = l * 2 + 1
    r = r * 2 + 1
    const mid = (l + r) >> 1
    if (mid >= 0 && mid < m && r - l + 1 <= dp[mid]) return true
    return false
  }
}

shortestPalindrome('bcba')
