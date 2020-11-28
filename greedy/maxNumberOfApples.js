/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function (arr) {
  arr.sort((a, b) => a - b)
  const len = arr.length
  const limit = 5000
  let sum = 0
  for (let i = 0; i < len; i++) {
    if (sum + arr[i] > limit) return i
    sum += arr[i]
  }
  return len
}
