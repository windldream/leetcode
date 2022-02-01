/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const layerNumber = Math.min(m, n) >> 1

  for (let i = 0; i < layerNumber; i++) {
    const data = []
    let index = 0

    // 从左往右
    for (let offset = i; offset < n - i - 1; offset++) {
      data[index++] = grid[i][offset]
    }

    // 从上往下
    for (let offset = i; offset < m - i - 1; offset++) {
      data[index++] = grid[offset][n - i - 1]
    }

    // 从右往左
    for (let offset = n - i - 1; offset > i; offset--) {
      data[index++] = grid[m - i - 1][offset]
    }

    // 从下往上
    for (let offset = m - i - 1; offset > i; offset--) {
      data[index++] = grid[offset][i]
    }

    const rotateData = rotateVector(data, k)
    index = 0

    for (let offset = i; offset < n - i - 1; offset++) {
      grid[i][offset] = rotateData[index++]
    }

    for (let offset = i; offset < m - i - 1; offset++) {
      grid[offset][n - i - 1] = rotateData[index++]
    }

    for (let offset = n - i - 1; offset > i; offset--) {
      grid[m - i - 1][offset] = rotateData[index++]
    }

    for (let offset = m - i - 1; offset > i; offset--) {
      grid[offset][i] = rotateData[index++]
    }
  }

  return grid

  function rotateVector(vector, offset) {
    offset = offset % vector.length

    const deque = []
    vector.forEach((item) => deque.push(item))

    while (offset) {
      deque.push(deque.shift())
      offset--
    }

    return deque
  }
}
