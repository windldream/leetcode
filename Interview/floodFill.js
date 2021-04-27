/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const dirs = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0]
  ]
  const queue = [[sr, sc]]
  const oldColor = image[sr][sc]
  while (queue.length) {
    const [x, y] = queue.shift()
    if (image[x][y] === newColor) continue
    image[x][y] = newColor
    for (const [dx, dy] of dirs) {
      const r = x + dx
      const c = y + dy
      if (r >= 0 && r < image.length && c >= 0 && c < image[0].length && image[r][c] === oldColor) {
        queue.push([r, c])
      }
    }
  }
  return image
}
