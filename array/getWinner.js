/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k >= arr.length) return Math.max(...arr)
  let win = arr[0]
  let count = 0
  for (let i = 1; i < arr.length && count < k; i++) {
    if (arr[i] < win) {
      count++
    } else {
      win = arr[i]
      count = 1
    }
  }
  return win
}
