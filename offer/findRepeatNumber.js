/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function (nums) {
//   const set = new Set()
//   for (const num of nums) {
//     if (set.has(num)) return num
//     set.add(num)
//   }
//   return -1
// }

var findRepeatNumber = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    while (nums[i] !== nums[nums[i]]) {
      const tmp = nums[nums[i]]
      nums[nums[i]] = nums[i]
      nums[i] = tmp
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) return nums[i]
  }
  return -1
}

findRepeatNumber([0, 1, 0])

// [2, 3, 1, 0, 2, 5, 3]
// [1, 3, 2, 0, 2, 5, 3]
// [3, 1, 2, 0, 2, 5, 3]
// [0, 1, 2, 3, 2, 5, 3]
