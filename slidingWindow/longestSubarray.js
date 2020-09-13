/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const len = nums.length
  let l = 0
  let r = 0
  let ans = 0
  const arr = []
  while (r < nums.length) {
    insert(arr, nums[r])
    while (arr.length > 1 && arr[arr.length - 1] - arr[0] > limit) {
      remove(arr, nums[l])
      l++
    }
    ans = Math.max(ans, arr.length)
    r++
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
