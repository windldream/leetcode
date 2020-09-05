/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let lo = 0
  let hi = arr.length - k
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (x - arr[mid] > arr[mid + k] - x) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return arr.slice(lo, lo + k)
}
