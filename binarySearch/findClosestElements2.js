/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const n = arr.length
  let l = 0
  let r = n - k

  while (l <= r) {
    const mid = (l + r) >> 1

    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return arr.slice(l, l + k)
}
