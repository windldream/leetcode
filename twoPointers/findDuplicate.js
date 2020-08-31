/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let fast = 0,
    slow = 0
  while (true) {
    fast = nums[nums[fast]]
    slow = nums[slow]
    if (slow === fast) {
      fast = 0
      while (nums[slow] !== nums[fast]) {
        fast = nums[fast]
        slow = nums[slow]
      }
      return nums[slow]
    }
  }
}
