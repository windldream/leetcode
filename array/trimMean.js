/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b)
  const len = arr.length * 0.05
  arr.splice(0, len)
  arr.splice(arr.length - len, len)
  const sum = arr.reduce((pre, cur) => pre + cur, 0)
  return sum / arr.length
}

trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
