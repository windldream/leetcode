/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let lo = 0
  let hi = arr.length - 1
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    // 左半边有序
    if (arr[lo] < arr[mid]) {
      if (arr[lo] <= target && target <= arr[mid]) {
        hi = mid
      } else {
        lo = mid + 1
      }
      // 右半边有序
    } else if (arr[lo] > arr[mid]) {
      if (arr[mid] < target && target <= arr[hi] && arr[lo] > arr[hi]) {
        lo = mid + 1
      } else {
        hi = mid
      }
    } else if (arr[lo] === arr[mid]) {
      if (arr[lo] !== target) {
        lo++
      } else {
        hi = lo
      }
    }
  }

  return arr[lo] === target ? lo : -1
}
