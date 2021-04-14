/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  const n = S.length
  if (n <= 2) return S
  let ans = ''
  let count = 0
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      count++
    } else {
      if (S[i] === S[i - 1]) count++
      else {
        ans += S[i - 1] + count
        count = 1
      }
    }
  }
  ans += S[n - 1] + count
  return ans.length >= n ? S : ans
}
