/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  return mergerSort(nums, [], 0, nums.length - 1)

  function mergerSort(nums, tmp, l, r) {
    if (l >= r) return 0
    const mid = (l + r) >> 1
    let cnt = mergerSort(nums, tmp, l, mid) + mergerSort(nums, tmp, mid + 1, r)
    let i = l
    let j = mid + 1
    let pos = l
    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) {
        tmp[pos] = nums[i++]
        cnt += j - (mid + 1)
      } else {
        tmp[pos] = nums[j++]
      }
      pos++
    }

    for (let k = i; k <= mid; k++) {
      tmp[pos++] = nums[k]
      cnt += j - (mid + 1)
    }
    for (let k = j; k <= r; k++) {
      tmp[pos++] = nums[k]
    }
    for (let k = l; k <= r; k++) {
      nums[k] = tmp[k]
    }
    return cnt
  }
}

// 左边有比右边大

reversePairs([7, 5, 6, 4])
