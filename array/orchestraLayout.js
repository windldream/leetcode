/**
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
 */
var orchestraLayout = function (num, xPos, yPos) {
  let layer = Math.min(xPos, num - xPos - 1, yPos, num - yPos - 1)
  num = BigInt(num)
  xPos = BigInt(xPos)
  yPos = BigInt(yPos)
  layer = BigInt(layer)
  const count = (num * layer * 4n - layer * layer * 4n) % 9n
  let start = layer
  let end = num - layer

  if (xPos === start) return ((count + yPos - start) % 9n) + 1n

  if (yPos === end - 1n) return ((count + end - start - 1n + xPos - start) % 9n) + 1n

  if (xPos === end - 1n) return ((count + (end - start) * 2n - 2n + end - yPos - 1n) % 9n) + 1n

  if (yPos === start) return ((count + (end - start) * 3n - 3n + end - xPos - 1n) % 9n) + 1n
}
