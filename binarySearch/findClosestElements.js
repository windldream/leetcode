/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let l = 0
  let r = arr.length - 1
  let removeNum = arr.length - k
  while (removeNum > 0) {
    if (x - arr[l] <= arr[r] - x) {
      r--
    } else {
      l++
    }
    removeNum--
  }

  return arr.slice(l, l + k)
}
