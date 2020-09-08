/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  return search(nums, 0, nums.length - 1)

  function search(nums, l, r) {
    if (l > r) return -1
    const mid = l + ((r - l) >> 1)
    const left = search(nums, l, mid - 1)
    if (left !== -1) {
      return left
    } else if (nums[mid] === mid) {
      return mid
    }
    return search(nums, mid + 1, r)
  }
}
