/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  s = s.split('').sort()
  const ans = []
  const visited = Array(s.length).fill(false)
  backtracking('')
  return ans

  function backtracking(str) {
    if (str.length === s.length) {
      ans.push(str)
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (visited[i]) continue
      if (i > 0 && s[i] === s[i - 1] && visited[i - 1]) continue
      visited[i] = true
      backtracking(str + s[i])
      visited[i] = false
    }
  }
}
