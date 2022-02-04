/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function (nums) {
  nums = nums.map((num) => num * 2)
  const n = nums.length / 2
  const leftSubArraySum = getSubArraySum(nums.slice(0, n))
  const rightSubArraySum = getSubArraySum(nums.slice(n))
  const target = nums.reduce((pre, cur) => pre + cur, 0) / 2
  let res = Infinity

  for (let leftCount = 0; leftCount <= n; leftCount++) {
    // 左边选取leftCount个数总和的情况
    // 右边选取rightCount个数总和的情况
    const left = leftSubArraySum[leftCount].sort((a, b) => a - b)
    const right = rightSubArraySum[n - leftCount].sort((a, b) => a - b)
    res = Math.min(res, twoSum(left, right, target))
  }

  return res

  function getSubArraySum(nums) {
    const n = nums.length
    const res = Array.from({ length: n + 1 }, () => [])

    for (let i = 0; i < 1 << n; i++) {
      const count = countOne(i)
      let sum = 0

      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) sum += nums[j]
      }

      res[count].push(sum)
    }

    return res
  }

  function countOne(num) {
    let count = 0

    while (num) {
      num &= num - 1
      count++
    }

    return count
  }

  function twoSum(nums1, nums2, target) {
    let l = 0
    let r = nums2.length - 1
    let res = Infinity

    while (l < nums1.length && r > -1) {
      // 第一部分数组总和情况
      const sum = nums1[l] + nums2[r]
      // 第二部分数组总和的情况 target - sum
      // target - sum - sum -> target - sum * 2
      // 由于 nums数组的值扩大了一倍 故 -> target - sum
      res = Math.min(res, Math.abs(target - sum))
      if (target === sum) return 0
      else if (sum > target) r--
      else l++
    }

    return res
  }
}

minimumDifference([2, -1, 0, 4, -2, -9])
