/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  arr.sort((a, b) => {
    const diff = Math.abs(a - x) - Math.abs(b - x)
    if (diff === 0) {
      return a - b
    } else {
      return diff
    }
  })

  return arr.slice(0, k).sort((a, b) => a - b)
}
