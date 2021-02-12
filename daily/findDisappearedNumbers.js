/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   const n = nums.length
//   for (let i = 0; i < n; i++) {
//     while (nums[nums[i] - 1] !== nums[i]) {
//       ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
//     }
//   }

//   const ans = []
//   for (let i = 0; i < n; i++) {
//     if (nums[i] !== i + 1) {
//       ans.push(i + 1)
//     }
//   }
//   return ans
// }

var findDisappearedNumbers = function (nums) {
  const n = nums.length
  // 找不到的数都不会加n
  for (let i = 0; i < n; i++) {
    const index = (nums[i] - 1) % n
    nums[index] += n
  }

  const ans = []
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      ans.push(i + 1)
    }
  }
  return ans
}

// [4,3,2,7,8,2,3,1]
// [7,3,2,4,8,2,3,1]
// [3,3,2,4,8,2,7,1]
// [2,3,3,4,8,2,7,1]
// [3,2,3,4,8,2,7,1]
// [3,2,3,4,1,2,7,8]
// [1,2,3,4,3,2,7,8]
