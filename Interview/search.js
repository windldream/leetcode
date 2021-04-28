/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (arr[l] < arr[mid]) {
      if (arr[l] <= target && target <= arr[mid]) {
        r = mid
      } else {
        l = mid + 1
      }
    } else if (arr[l] > arr[mid]) {
      if (arr[l] <= target || target <= arr[mid]) {
        r = mid
      } else {
        l = mid + 1
      }
    } else if (arr[l] === arr[mid]) {
      if (arr[l] !== target) {
        l++
      } else {
        r = l
      }
    }
  }

  return arr[l] === target ? l : -1
}
