/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
const minOperations = function (target, arr) {
  const map = new Map()
  for (let i = 0; i < target.length; i++) {
    map.set(target[i], i)
  }
  const list = arr.map((val) => map.get(val)).filter((val) => val !== undefined)
  return target.length - lengthOfLIS(list)

  function lengthOfLIS(nums) {
    let len = 1
    const n = nums.length
    if (n === 0) return 0
    const dp = Array(n + 1).fill(0)
    dp[len] = nums[0]
    for (let i = 1; i < n; i++) {
      if (nums[i] > dp[len]) {
        dp[++len] = nums[i]
      } else {
        let l = 1
        let r = len
        let pos = 0
        while (l <= r) {
          const mid = (l + r) >> 1
          if (dp[mid] < nums[i]) {
            pos = mid
            l = mid + 1
          } else {
            r = mid - 1
          }
        }
        dp[pos + 1] = nums[i]
      }
    }

    return len
  }
}

minOperations([6, 4, 8, 1, 3, 2], [4, 7, 6, 2, 3, 8, 6, 1])
