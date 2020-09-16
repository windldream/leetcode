/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  const map = new Map()
  for (let i = 0; i < matrix.length; i++) {
    let key = ''
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] != matrix[i][j - 1]) {
        key += j
      }
    }
    if (!map.has(key)) {
      map.set(key, 0)
    }
    map.set(key, map.get(key) + 1)
  }

  let max = 0
  for (const val of map.values()) {
    max = Math.max(max, val)
  }
  return max
}
