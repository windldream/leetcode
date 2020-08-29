/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
  const len = arr1.length
  const d = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]

  let ans = 0
  for (const [dx, dy] of d) {
    let max = -Infinity
    let min = Infinity
    for (let i = 0; i < len; i++) {
      max = Math.max(max, arr1[i] * dx + arr2[i] * dy + i)
      min = Math.min(min, arr1[i] * dx + arr2[i] * dy + i)
    }
    ans = Math.max(ans, max - min)
  }
  return ans
}
