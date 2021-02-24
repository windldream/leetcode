/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length
  if (n < 3) return 0

  let ans = 0
  let min = height[0]
  let cur = 0
  for (let i = 1; i < n; i++) {
    if (height[i] >= min) {
      min = height[i]
      ans += cur
      cur = 0
    } else {
      cur += min - height[i]
    }
  }

  min = height[n - 1]
  cur = 0
  for (let i = n - 2; i >= 0; i--) {
    if (height[i] > min) {
      min = height[i]
      ans += cur
      cur = 0
    } else {
      cur += min - height[i]
    }
  }
  return ans
}

trap([4, 2, 0, 3, 2, 5])
