/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function (A) {
  const sum = A.reduce((prev, cur) => prev + cur, 0)
  const n = A.length
  A.sort((a, b) => a - b)
  for (let i = 1; i <= n >> 1; i++) {
    if ((sum * i) % n === 0 && dfs(A, 0, i, (sum * i) / n)) return true
  }
  return false

  function dfs(A, begin, n, target) {
    if (n === 0) return target === 0
    if (target < n * A[begin]) return false
    for (let i = begin; i <= A.length - n; i++) {
      if (i > begin && A[i] === A[i - 1]) continue
      if (dfs(A, i + 1, n - 1, target - A[i])) return true
    }
    return false
  }
}

splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8])
