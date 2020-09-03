/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false
  const shorterDim = Math.min(matrix.length, matrix[0].length)
  for (let i = 0; i < shorterDim; i++) {
    if (binarySearch(matrix, target, i, true) || binarySearch(matrix, target, i, false)) return true
  }
  return false

  function binarySearch(matrix, target, start, isVertical) {
    let lo = start
    let hi = isVertical ? matrix[0].length - 1 : matrix.length - 1

    while (lo <= hi) {
      const mid = lo + ((hi - lo) >> 1)
      if (isVertical) {
        if (matrix[start][mid] < target) {
          lo = mid + 1
        } else if (matrix[start][mid] > target) {
          hi = mid - 1
        } else {
          return true
        }
      } else {
        if (matrix[mid][start] < target) {
          lo = mid + 1
        } else if (matrix[mid][start] > target) {
          hi = mid - 1
        } else {
          return true
        }
      }
    }
    return false
  }
}

searchMatrix(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ],
  20
)
