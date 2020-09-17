/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const arr = Array(101).fill(0)
  for (const num of nums) {
    arr[num] += 1
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] !== 0 ? arr[nums[i] - 1] : 0
  }
  return nums
}
