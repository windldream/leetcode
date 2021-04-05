/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  s = s.split('').sort()
  const ans = new Set()
  visited = Array(s.length).fill(false)
  backtracking('')
  return [...ans]

  function backtracking(str) {
    if (str.length === s.length) {
      ans.add(str)
      return
    }
    for (let i = 0; i < s.length; i++) {
      if (visited[i]) continue
      visited[i] = true
      backtracking(str + s[i])
      visited[i] = false
    }
  }
}

permutation('abc')
