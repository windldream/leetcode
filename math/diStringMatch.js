/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  const n = S.length
  const ans = []
  let min = 0
  let max = n
  for (let i = 0; i < n; i++) {
    if (S[i] === 'I') {
      ans[i] = min++
    } else {
      ans[i] = max--
    }
  }
  ans[n] = (max + min) >> 1
  return ans
}
