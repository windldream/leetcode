/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  const sum = A.reduce((prev, cur) => prev + cur, 0)
  if (sum % 3) return false
  const aver = sum / 3
  let total = 0
  let count = 0
  for (let i = 0; i < A.length; i++) {
    total += A[i]
    if (total === aver) {
      if (count === 0) {
        total = 0
        count++
        continue
      } else if (i !== A.length - 1) {
        return true
      }
    }
  }
  return false
}

canThreePartsEqualSum([1, -1, 1, -1])
