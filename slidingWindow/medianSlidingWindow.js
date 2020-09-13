/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  const ans = []
  let l = 0
  let r = 0
  const arr = []
  const isOdd = k & 1
  while (r < nums.length) {
    insert(arr, nums[r++])
    if (arr.length === k) {
      const mid = k >> 1
      if (isOdd) {
        ans.push(arr[mid])
      } else {
        ans.push((arr[mid] + arr[mid - 1]) / 2)
      }
      remove(arr, nums[l++])
    }
  }
  return ans

  function insert(arr, num) {
    if (arr.length === 0) {
      arr.push(num)
    } else {
      if (arr[0] > num) {
        arr.unshift(num)
      } else if (arr[arr.length - 1] <= num) {
        arr.push(num)
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] >= num) {
            arr.splice(i, 0, num)
            break
          }
        }
      }
    }
  }

  function remove(arr, num) {
    const index = arr.indexOf(num)
    arr.splice(index, 1)
  }
}

medianSlidingWindow([5, 2, 2, 7, 3, 7, 9, 0, 2, 3], 9)
