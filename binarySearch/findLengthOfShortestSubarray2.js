/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length
  let left = 0

  while (left + 1 < n && arr[left] <= arr[left + 1]) left++

  if (left === n - 1) return 0

  let right = n - 1

  while (right > 0 && arr[right - 1] <= arr[right]) right--

  let ans = Math.min(n - left - 1, right)

  let i = 0
  let j = right

  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      ans = Math.min(ans, j - i - 1)
      i++
    } else {
      j++
    }
  }

  return ans
}
