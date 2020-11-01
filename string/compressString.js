/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let ans = ''
  let i = 0
  while (i < S.length) {
    let count = 1
    while (S[i] === S[i + 1]) {
      i++
      count++
    }
    ans += S[i] + count
    i++
  }

  return ans.length < S.length ? ans : S
}
