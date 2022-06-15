/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
  const m = mat.length
  const n = mat[0].length
  let count = 0
  let lo = 0
  let hi = 0

  for (let i = 0; i < m; i++) {
    lo += mat[i][0]
    hi += mat[i][n - 1]
  }

  let init = lo
  let ans = -1

  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    count = 1
    dfs(mid, 0, init, k, mat)

    if (count < k) {
      lo = mid + 1
    } else {
      ans = mid
      hi = mid - 1
    }
  }

  return ans

  function dfs(mid, idx, sum, k, mat) {
    if (sum > mid || idx === m || count > k) return

    dfs(mid, idx + 1, sum, k, mat)

    for (let i = 1; i < n; i++) {
      if (sum + mat[idx][i] - mat[idx][0] <= mid) {
        count++
        dfs(mid, idx + 1, sum + mat[idx][i] - mat[idx][0], k, mat)
      } else {
        break
      }
    }
  }
}
