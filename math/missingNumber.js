/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
  const len = arr.length
  const aver = (arr[len - 1] - arr[0]) / len
  for (let i = 1; i < len; i++) {
    if (arr[i] - arr[i - 1] !== aver) return arr[i] - aver
  }
  return arr[0]
};