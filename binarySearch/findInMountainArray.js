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
  let lo = 0
  let hi = mountainArr.length() - 1
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  const l = search(target, mountainArr, 0, lo, (a, b) => a - b)
  if (l !== -1) return l
  const r = search(target, mountainArr, lo + 1, mountainArr.length() - 1, (a, b) => b - a)
  if (r !== -1) return r
  return -1

  function search(target, mountainArr, start, end, compare) {
    while (start <= end) {
      const mid = start + ((end - start) >> 1)
      const comp = compare(mountainArr.get(mid), target)
      if (comp === 0) {
        return mid
      } else if (comp < 0) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    return -1
  }
}
