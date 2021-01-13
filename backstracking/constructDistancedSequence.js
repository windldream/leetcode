/**
 * @param {number} n
 * @return {number[]}
 */
const constructDistancedSequence = function (n) {
  const visited = Array(n + 1).fill(false)
  const res = Array(2 * n - 1).fill(0)
  backtracking(0)
  return res

  function backtracking(index) {
    if (index >= res.length) return true
    if (res[index] !== 0) return backtracking(index + 1)
    for (let i = n; i >= 1; i--) {
      if (visited[i]) continue
      if (i === 1) {
        visited[i] = true
        res[index] = i
        if (backtracking(index + 1)) return true
        visited[i] = false
        res[index] = 0
      } else {
        if (index + i >= res.length) continue
        if (res[index + i] !== 0) continue
        res[index] = i
        res[index + i] = i
        visited[i] = true
        if (backtracking(index + 1)) return true
        res[index] = 0
        res[index + i] = 0
        visited[i] = false
      }
    }
    return false
  }
}

constructDistancedSequence(11)
