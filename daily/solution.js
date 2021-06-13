/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lo = 1
    let hi = n
    let ans = -1
    while (lo <= hi) {
      const mid = lo + ((hi - lo) >> 1)
      if (isBadVersion(mid)) {
        ans = mid
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    }
    return ans
  }
}
