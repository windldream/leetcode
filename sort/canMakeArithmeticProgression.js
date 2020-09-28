/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length === 2) return true
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] - arr[i + 1] !== arr[i + 1] - arr[i + 2]) return false
  }
  return true
}
