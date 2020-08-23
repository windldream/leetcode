/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0
  let l = 0,
    r = height.length - 1
  let lMax = height[l]
  let rMax = height[r]

  let res = 0
  while (l < r) {
    if (lMax < rMax) {
      res += lMax - height[l++]
      lMax = Math.max(lMax, height[l])
    } else {
      res += rMax - height[r--]
      rMax = Math.max(rMax, height[r])
    }
  }

  return res
}
