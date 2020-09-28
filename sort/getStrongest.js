/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b)
  const len = arr.length
  const mid = arr[(len - 1) >> 1]
  arr.sort((a, b) => {
    if (Math.abs(a - mid) > Math.abs(b - mid) || (Math.abs(a - mid) === Math.abs(b - mid) && a > b)) {
      return -1
    }
    return 1
  })
  return arr.slice(0, k)
}
