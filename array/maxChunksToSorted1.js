/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const len = arr.length
  const maxArr = []
  const minArr = []

  let max = -Infinity
  for (let i = 0; i < len; i++) {
    max = Math.max(max, arr[i])
    maxArr[i] = max
  }

  let min = Infinity
  for (let i = len - 1; i >= 0; i--) {
    min = Math.min(min, arr[i])
    minArr[i] = min
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    if (i === len - 1 || maxArr[i] < minArr[i + 1]) {
      ans++
    }
  }
  return ans
}
