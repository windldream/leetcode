/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const s = S.split('').sort()
  const ans = []
  const used = Array(s.length).fill(false)
  backtracking('', 0)
  return ans

  function backtracking(str, idx) {
    if (str.length === s.length) {
      ans.push(str)
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (used[i] || (i > 0 && used[i - 1] && s[i] === s[i - 1])) continue
      used[i] = true
      backtracking(str + s[i], i)
      used[i] = false
    }
  }
}
