/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function (mat) {
  const n = mat[0].length

  for (let i = 0; i < n; i++) {
    if (includeNum(mat, mat[0][i])) {
      return mat[0][i]
    }
  }

  return -1

  function includeNum(mat, target) {
    outer: for (const list of mat) {
      let l = 0
      let r = list.length - 1

      while (l <= r) {
        const mid = (l + r) >> 1

        if (list[mid] > target) {
          r = mid - 1
        } else if (list[mid] < target) {
          l = mid + 1
        } else {
          continue outer
        }
      }

      return false
    }

    return true
  }
}
