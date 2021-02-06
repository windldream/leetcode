/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  const n = nums.length
  let cnt = 0
  for (let i = 1; i < n && cnt != 2; i += 1) {
    if (nums[i - 1] <= nums[i]) continue
    cnt += 1
    // nums[i - 2] <= nums[i - 1]
    if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
      nums[i] = nums[i - 1]
    } else {
      nums[i - 1] = nums[i]
    }
  }
  return cnt <= 1
}

// 7 4 6 ->
