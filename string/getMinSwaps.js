/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function (num, k) {
  const beginNum = num.split('')
  let nums = num.split('')
  for (let i = 0; i < k; i++) {
    nums = nextPermulation(nums)
  }

  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (beginNum[i] !== nums[i]) {
      let j = i + 1
      while (beginNum[j] !== nums[i]) j++
      while (j !== i) {
        swap(beginNum, j - 1, j)
        ans++
        j--
      }
    }
  }
  return ans

  function nextPermulation(nums) {
    const n = nums.length
    for (let i = n - 1; i > 0; i--) {
      // 找到需要交换的元素
      if (nums[i] > nums[i - 1]) {
        let j = n - 1
        // nums[i] >= nums[i + 1] >= nums[i + 2] >= nums[n - 1]
        while (nums[j] <= nums[i - 1]) j--
        // 可以看出 i -> j 递减
        // 所以交换i - 1 和 j就是最小的下一个排列
        swap(nums, i - 1, j)
        j = n - 1
        while (i < j) swap(nums, i++, j--)
        break
      }
    }
    return nums
  }

  function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
}

getMinSwaps('11112', 4)
