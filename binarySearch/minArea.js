/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {
  const n = image.length
  const m = image[0].length
  let startX = x
  let startY = y
  let endX = x
  let endY = y
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (image[i][j] === '1') {
        startX = Math.min(startX, i)
        endX = Math.max(endX, i)
        startY = Math.min(startY, j)
        endY = Math.max(endY, j)
      }
    }
  }

  return (endX - startX + 1) * (endY - startY + 1)
}

minArea(
  [
    ['0', '0', '1', '0'],
    ['0', '1', '1', '0'],
    ['0', '1', '0', '0']
  ],
  0,
  2
)
