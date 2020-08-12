/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function (A) {
  A.sort((a, b) => a - b)
  let res = 0
  const visited = Array(A.length).fill(0)
  backtrack(A, [], visited)
  return res

  function backtrack(A, cur, visited) {
    if (cur.length === A.length) {
      res++
      return
    }
    for (let i = 0; i < A.length; i++) {
      if (visited[i]) continue
      if (i > 0 && !visited[i - 1] && A[i] === A[i - 1]) continue
      if (cur.length && !squareful(cur[cur.length - 1], A[i])) continue
      cur.push(A[i])
      visited[i] = 1
      backtrack(A, cur, visited)
      cur.pop()
      visited[i] = 0
    }
  }

  function squareful(x, y) {
    const n = parseInt(Math.sqrt(x + y))
    return n * n === x + y
  }
}
