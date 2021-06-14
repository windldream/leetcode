/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  const n = arr.length
  let l = 1
  let r = n - 2
  while (l <= r) {
    const mid = (l + r) >> 1
    if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      l = mid + 1
    } else if (arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      r = mid - 1
    } else {
      return mid
    }
  }
}

// 1 2 3 4 5 4 3 2
