/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b)
  verticalCuts.sort((a, b) => a - b)
  const m = horizontalCuts.length
  const n = verticalCuts.length
  const mod = 10 ** 9 + 7
  let maxH = Math.max(horizontalCuts[0], h - horizontalCuts[m - 1])
  let maxW = Math.max(verticalCuts[0], w - verticalCuts[n - 1])
  for (let i = 1; i < m; i++) {
    maxH = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], maxH)
  }
  for (let i = 1; i < n; i++) {
    maxW = Math.max(verticalCuts[i] - verticalCuts[i - 1], maxW)
  }
  return (BigInt(maxH) * BigInt(maxW)) % BigInt(mod)
}
