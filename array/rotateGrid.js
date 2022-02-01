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

    InitData(data, index, i, grid)

    const rotateData = rotateVector(data, k)
    index = 0

    reverseData(rotateData, index, i, grid)
  }

  return grid

  function reverseData(rotateData, index, layer, grid) {
    for (let offset = layer; offset < n - layer - 1; offset++) {
      grid[layer][offset] = rotateData[index++]
    }

    for (let offset = layer; offset < m - layer - 1; offset++) {
      grid[offset][n - layer - 1] = rotateData[index++]
    }

    for (let offset = n - layer - 1; offset > layer; offset--) {
      grid[m - layer - 1][offset] = rotateData[index++]
    }

    for (let offset = m - layer - 1; offset > layer; offset--) {
      grid[offset][layer] = rotateData[index++]
    }
  }

  function InitData(data, index, layer, grid) {
    // 从左往右
    for (let offset = layer; offset < n - layer - 1; offset++) {
      data[index++] = grid[layer][offset]
    }

    // 从上往下
    for (let offset = layer; offset < m - layer - 1; offset++) {
      data[index++] = grid[offset][n - layer - 1]
    }

    // 从右往左
    for (let offset = n - layer - 1; offset > layer; offset--) {
      data[index++] = grid[m - layer - 1][offset]
    }

    // 从下往上
    for (let offset = m - layer - 1; offset > layer; offset--) {
      data[index++] = grid[offset][layer]
    }
  }

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
