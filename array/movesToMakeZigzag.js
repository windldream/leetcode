/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  const len = nums.length
  if (len < 2) return 0
  let odd = 0
  let even = 0
  for (let i = 0; i < len; i++) {
    const left = i - 1 >= 0 ? nums[i - 1] : Infinity
    const right = i + 1 < len ? nums[i + 1] : Infinity
    if (i % 2 === 0) {
      // 奇数索引大
      if (nums[i] >= left || nums[i] >= right) {
        odd += nums[i] - Math.min(left, right) + 1
      }
    } else {
      // 偶数索引大
      if (nums[i] >= left || nums[i] >= right) {
        even += nums[i] - Math.min(left, right) + 1
      }
    }
  }

  return Math.min(odd, even)
}

movesToMakeZigzag([9, 6, 1, 6, 2])
