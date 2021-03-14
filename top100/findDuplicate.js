/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function (nums) {
//   const set = new Set()
//   for (const num of nums) {
//     if (set.has(num)) return num
//     set.add(num)
//   }
// }

var findDuplicate = function (nums) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    let cnt = 0
    for (const num of nums) {
      if (num <= mid) cnt++
    }
    if (cnt > mid) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return l
}

findDuplicate([1, 3, 4, 2, 2])
