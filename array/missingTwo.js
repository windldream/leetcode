/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  nums.push(-1)
  nums.push(-1)
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== -1 && nums[i] !== i + 1) {
      const index = nums[i] - 1
      ;[nums[i], nums[index]] = [nums[index], nums[i]]
    }
  }

  const ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) ans.push(i + 1)
  }
  return ans
}

missingTwo([2])
