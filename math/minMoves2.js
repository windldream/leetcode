/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b)
  const mid = nums[nums.length >> 1]
  let ans = 0
  for (const num of nums) {
    ans += Math.abs(num - mid)
  }
  return ans
}

minMoves2([1, 2, 3, 4])

// 1 2 3 4
// 1 3 3 4
// 1 3 3 3
// 2 3 3 3
// 3 3 3 3
