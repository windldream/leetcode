/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  const len = nums.length
  if (len < 3) return true
  let count = 0
  for (let i = 1; i < len; i++) {
    if (nums[i - 1] <= nums[i]) continue
    count++
    if (count > 1) return false
    if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
      nums[i] = nums[i - 1]
    } else {
      nums[i - 1] = nums[i]
    }
  }
  return true
}

checkPossibility([3, 4, 2, 3])
