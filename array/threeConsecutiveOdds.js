/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  const len = arr.length
  let oddCount = arr[0] % 2 === 1
  for (let i = 1; i < len; i++) {
    if (arr[i] & 1) {
      oddCount++
      if (oddCount === 3) return true
    } else {
      oddCount = 0
    }
  }
  return false
}
