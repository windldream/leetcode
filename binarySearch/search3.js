/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
const search = function (reader, target) {
  let lo = 0
  let hi = 20000
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    const val = reader.get(mid)
    if (val > target) {
      hi = mid
    } else if (val < target) {
      lo = mid + 1
    } else {
      return mid
    }
  }

  return reader.get(lo) === target ? lo : -1
};