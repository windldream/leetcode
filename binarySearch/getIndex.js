/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function(reader) {
  const len = reader.length()
  let l = 0
  let r = len - 1
  while (l <= r) {
    if (l === r) return l
    const mid = (l + r) >> 1
    let diff
    if ((l - r + 1) & 1) {
      diff = reader.compareSub(l, mid - 1, mid + 1, r)
      if (diff === 0) return mid
      else if (diff === 1) r = mid - 1
      else l = mid + 1
    } else {
      diff = reader.compareSub(l, mid, mid + 1, r)
      if (diff === 1) r = mid
      else l = mid + 1
    }
  }

  return l
};