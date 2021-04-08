/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => a + '' + b - (b + '' + a)).join('')
}

minNumber([3, 30, 34, 5, 9])

// 33 3334
// 332433
// 333324
