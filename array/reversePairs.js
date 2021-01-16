/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function (nums) {
  const len = nums.length
  const tmp = Array(len).fill(0)
  return mergeSort(nums, tmp, 0, len - 1)

  function mergeSort(nums, tmp, l, r) {
    if (l >= r) return 0
    const mid = (l + r) >> 1
    let count = mergeSort(nums, tmp, l, mid) + mergeSort(nums, tmp, mid + 1, r)
    let i = l
    let j = mid + 1
    let pos = l
    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) {
        tmp[pos] = nums[i]
        i += 1
        count += j - (mid + 1)
      } else {
        tmp[pos] = nums[j]
        j += 1
      }
      pos++
    }
    for (let k = i; k <= mid; k++) {
      tmp[pos++] = nums[k]
      count += j - (mid + 1)
    }
    for (let k = j; k <= r; k++) {
      tmp[pos++] = nums[k]
    }
    for (let i = l; i <= r; i++) {
      nums[i] = tmp[i]
    }
    return count
  }
}

reversePairs([7, 5, 6, 4])
