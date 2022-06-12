/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const n = mountainArr.length()
  let l = 0
  let r = n - 1
  let maxIndex = n - 1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (mountainArr.get(mid) >= mountainArr.get(mid + 1)) {
      maxIndex = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  const left = search(target, mountainArr, 0, maxIndex)

  if (left !== -1) return left

  const right = search(target, mountainArr, maxIndex + 1, n - 1, (a, b) => b - a)

  return right !== -1 ? right : -1

  function search(target, mountainArr, start, end, compare = (a, b) => a - b) {
    while (start <= end) {
      const mid = (start + end) >> 1
      const val = compare(mountainArr.get(mid), target)

      if (val === 0) return mid

      if (val > 0) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return -1
  }
}
