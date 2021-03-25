/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   const n = nums.length
//   for (let i = 0; i < n; i++) {
//     while (nums[i] !== nums[nums[i] - 1]) {
//       const tmp = nums[nums[i] - 1]
//       nums[nums[i] - 1] = nums[i]
//       nums[i] = tmp
//     }
//   }

//   let ans = []
//   for (let i = 0; i < nums.length; i++) {
//     if (i + 1 !== nums[i]) ans.push(i + 1)
//   }
//   return ans
// }

// var findDisappearedNumbers = function (nums) {
//   const n = nums.length
//   let ans = []
//   for (let i = 0; i < n; i++) {
//     const index = (nums[i] - 1) % n
//     nums[index] += n
//   }

//   for (let i = 0; i < n; i++) {
//     if (nums[i] <= n) ans.push(i + 1)
//   }
//   return ans
// }

var findDisappearedNumbers = function (nums) {
  for (const num of nums) {
    const index = Math.abs(num) - 1
    if (nums[index] > 0) nums[index] *= -1
  }

  const ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) ans.push(i + 1)
  }
  return ans
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
