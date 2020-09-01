/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const len = nums.length
  const arr = []
  for (let i = 0; i < len; i++) {
    for (const num of nums[i]) {
      arr.push([num, i])
    }
  }
  arr.sort((a, b) => a[0] - b[0])

  let l = 0
  let r = 0
  let k = 0
  let count = new Map()
  let ans
  while (r < arr.length) {
    if (!count.has(arr[r][1])) {
      count.set(arr[r][1], 0)
      k++
    }
    count.set(arr[r][1], count.get(arr[r][1]) + 1)
    if (k === len) {
      while (count.get(arr[l][1]) > 1) {
        count.set(arr[l][1], count.get(arr[l][1]) - 1)
        l++
      }
      if (!ans || ans[1] - ans[0] > arr[r][0] - arr[l][0]) {
        ans = [arr[l][0], arr[r][0]]
      }
    }
    r++
  }
  return ans
}

smallestRange([
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30]
])
