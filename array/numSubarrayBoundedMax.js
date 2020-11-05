/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function (A, L, R) {
  return getCount(A, R) - getCount(A, L - 1)

  function getCount(arr, max) {
    let res = 0
    let numSub = 0
    for (const num of arr) {
      if (num <= max) {
        numSub++
        res += numSub
      } else {
        numSub = 0
      }
    }
    return res
  }
}
