/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  const mod = 10 ** 9 + 7
  const n = nums1.length
  const list = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(nums1[i] - nums2[i])
    sum = (sum + diff) % mod
    if (!list.includes(nums1[i])) list.push(nums1[i])
  }

  list.sort((a, b) => a - b)

  let ans = sum
  for (let i = 0; i < n; i++) {
    const num = findNearestNum(list, nums2[i])
    const cur = Math.abs(nums1[i] - nums2[i])
    ans = Math.min(ans, sum - (cur - num))
  }
  return ans

  function findNearestNum(arr, num) {
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (arr[mid] === num) return 0
      else if (arr[mid] > num) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    if (l < 0 || l >= arr.length) return Math.abs(arr[r] - num)
    if (r < 0 || r >= arr.length) return Math.abs(arr[l] - num)
    return Math.min(Math.abs(arr[l] - num), Math.abs(arr[r] - num))
  }
}

minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4])

// 1 7 5
// 2 3 5
// 1 4 0
