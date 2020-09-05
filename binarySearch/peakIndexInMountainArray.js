/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let lo = 0
  let hi = arr.length - 1
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid
    } else if (arr[mid] > arr[mid + 1]) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
}
