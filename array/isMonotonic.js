/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  const len = A.length
  let isIncrease = false
  let isDecrease = false
  for (let i = 1; i < len; i++) {
    if (A[i - 1] < A[i]) {
      if (isDecrease) {
        return false
      } else if (!isIncrease) {
        isIncrease = true
      }
    } else if (A[i - 1] > A[i]) {
      if (isIncrease) {
        return false
      } else if (!isDecrease) {
        isDecrease = true
      }
    }
  }
  return true
}

isMonotonic([1, 3, 2])
