/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = []
  const track = []
  nums.sort((a, b) => a - b)
  backtrack(nums, track, 0)
  return res

  function backtrack(nums, track, index) {
    res.push(track.slice())
    for (let i = index; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && i > index) {
        continue
      }
      track.push(nums[i])
      backtrack(nums, track, i + 1)
      track.pop()
    }
  }
}

// [] [1]
