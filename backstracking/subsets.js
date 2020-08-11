/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  nums.sort((a, b) => a - b)
  const track = []
  backtrack(nums, track, 0)
  return res

  function backtrack(nums, track, start) {
    res.push(track.slice())
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(nums, track, i + 1)
      track.pop()
    }
  }
}
