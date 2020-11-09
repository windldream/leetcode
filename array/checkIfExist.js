/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(2 * arr[i], i + 1) !== -1 || arr.indexOf(arr[i] / 2, i + 1) !== -1) return true
  }
  return false
}
