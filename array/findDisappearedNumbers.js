/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const len = nums.length
  if (len === 0) return []
  const res = []
  for (let i = 0; i < nums.length; i++) {
    while (nums[nums[i] - 1] !== nums[i]) {
      ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      res.push(i + 1)
    }
  }
  return res
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
