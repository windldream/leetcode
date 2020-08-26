/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
  const m = mat.length
  const n = mat[0].length
  let l = 0
  let r = 0
  for (let i = 0; i < m; i++) {
    l += mat[i][0]
    r += mat[i][n - 1]
  }

  let min = l
  let num
  while (l < r) {
    let mid = (l + r) >> 1
    num = 1
    helper(mid, 0, min)
    if (num >= k) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return l

  function helper(mid, index, sum) {
    if (sum > mid || index === m || num > k) return
    helper(mid, index + 1, sum, k)
    for (let i = 1; i < n; i++) {
      if (sum + mat[index][i] - mat[index][0] <= mid) {
        num++
        helper(mid, index + 1, sum + mat[index][i] - mat[index][0])
      } else {
        break
      }
    }
  }
}
