/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const m = image.length
  const n = image[0].length
  const queue = [[sr, sc]]
  const initColor = image[sr][sc]

  if (initColor === color) return image

  while (queue.length) {
    const [r, c] = queue.shift()
    image[r][c] = color

    for (const [dr, dc] of dirs) {
      const x = dr + r
      const y = dc + c

      if (x >= 0 && x < m && y >= 0 && y < n && image[x][y] === initColor) {
        queue.push([x, y])
      }
    }
  }

  return image
}
