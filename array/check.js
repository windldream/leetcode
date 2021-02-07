/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const origin = nums.slice().sort((a, b) => a - b)
  return nums.concat(nums).join(',').includes(origin.join(','))
}

check([3, 4, 5, 1, 2])
