/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1
  let r = n
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    const num = guess(mid)
    if (num === 1) {
      l = mid + 1
    } else if (num === -1) {
      r = mid - 1
    } else {
      return mid
    }
  }
}
