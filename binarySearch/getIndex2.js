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
var getIndex = function (reader) {
  const len = reader.length()
  let l = 0
  let r = len - 1
  let ans = -1

  while (l <= r) {
    if (l === r) return l

    const mid = (l + r) >> 1

    // 奇数情况
    if ((r - l + 1) & 1) {
      const val = reader.compareSub(l, mid - 1, mid + 1, r)

      if (val === -1) {
        l = mid + 1
      } else if (val === 1) {
        r = mid - 1
      } else {
        return mid
      }
    } else {
      const val = reader.compareSub(l, mid, mid + 1, r)

      if (val === -1) {
        l = mid + 1
      } else {
        r = mid
        ans = mid
      }
    }
  }

  return ans
}
