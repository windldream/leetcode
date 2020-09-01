/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) continue
    let slow = i
    let fast = getNext(nums, i, len)
    let val = nums[i]
    while (val * nums[fast] > 0 && val * nums[getNext(nums, fast, len)] > 0) {
      if (slow === fast) {
        if (slow === getNext(nums, slow, len)) break
        return true
      }
      slow = getNext(nums, slow, len)
      fast = getNext(nums, getNext(nums, fast, len), len)
    }
    slow = i
    while (val * nums[slow] > 0) {
      let next = getNext(nums, slow, len)
      nums[slow] = 0
      slow = next
    }
  }
  return false

  function getNext(nums, i, n) {
    return (((nums[i] + i) % n) + n) % n
  }
}
