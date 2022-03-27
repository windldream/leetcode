/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const n = colors.length
  let ans = 1

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      if (colors[i] !== colors[j]) {
        ans = Math.max(ans, j - i)
        break
      }
    }
  }

  return ans
}
