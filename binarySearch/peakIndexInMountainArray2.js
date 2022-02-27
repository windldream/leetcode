/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let lo = 1
  let hi = arr.length - 2

  while (lo <= hi) {
    const mid = (lo + hi) >> 1

    if (arr[mid] > arr[mid - 1]) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return hi
}
