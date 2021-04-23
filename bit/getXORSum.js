/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function (arr1, arr2) {
  let a = 0
  for (const num of arr1) {
    a ^= num
  }

  let b = 0
  for (const num of arr2) {
    b ^= num
  }

  return a & b
}
