/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const ans = []
  backtracking('')
  return ans

  function backtracking(str) {
    if (str.length === S.length) {
      ans.push(str)
      return
    }
    for (let i = 0; i < S.length; i++) {
      if (str.includes(S[i])) continue
      backtracking(str + S[i])
    }
  }
}
