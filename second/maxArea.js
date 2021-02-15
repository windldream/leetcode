/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length
  let l = 0
  let r = n - 1
  let area = 0
  while (l < r) {
    const w = r - l
    const h = Math.min(height[l], height[r])
    area = Math.max(area, w * h)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return area
}
