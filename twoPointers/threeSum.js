/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  const ans = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const target = 0 - nums[i]
    let l = i + 1
    let r = len - 1

    while (l < r) {
      const sum = nums[l] + nums[r]

      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        ans.push([nums[i], nums[l], nums[r]])

        const t1 = nums[l]
        const t2 = nums[r]
        l++
        r--

        while (nums[l] === t1) l++

        while (nums[r] === t2) r--
      }
    }
  }

  return ans
}

threeSum([-1, 0, 1, 2, -1, -4])
