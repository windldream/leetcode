/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++
  }
  if (count === 5) return true

  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === 0 || nums[i] === 0) continue
    const diff = nums[i] - nums[i - 1]
    if (diff === 0) return false
    if (diff > 1) {
      if (count >= diff - 1) {
        count -= diff - 1
      } else {
        return false
      }
    }
  }
  return true
}

isStraight([0, 0, 8, 5, 4])
