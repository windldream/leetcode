/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  const list = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    list.push([i, nums[i]])
  }
  list.sort((a, b) => b[1] - a[1])

  const ans = []
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      ans[list[i][0]] = 'Gold Medal'
    } else if (i === 1) {
      ans[list[i][0]] = 'Silver Medal'
    } else if (i === 2) {
      ans[list[i][0]] = 'Bronze Medal'
    } else {
      ans[list[i][0]] = i + 1 + ''
    }
  }
  return ans
}

findRelativeRanks([10, 3, 8, 9, 4])
