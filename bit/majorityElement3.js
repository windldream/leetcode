/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 0) return -1
  let maj = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (maj === nums[i]) {
      count++
    } else {
      count--
      if (count === 0) {
        maj = nums[i + 1]
      }
    }
  }

  return count > 0 ? maj : -1
}

majorityElement([3, 2, 3])
