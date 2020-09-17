/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  const len = nums.length
  let r = 0
  const map = new Map()
  let ans = 0
  while (r < len) {
    if (!map.has(nums[r])) {
      map.set(nums[r], 0)
    }
    map.set(nums[r], map.get(nums[r]) + 1)
    if (check(map, r)) {
      ans = Math.max(ans, r + 1)
    }
    r++
  }
  return ans

  function check(map, total) {
    let size = map.size
    let n = 0
    for (const val of map.values()) {
      if (val === 1) {
        n++
      }
    }
    if (n === map.size) return true
    if (n === 1) {
      size = map.size - 1
    }
    if (size === 0) return true
    if (total % size !== 0) return false
    const aver = total / size
    let isUsed = false
    for (const [key, val] of map) {
      if (val !== aver) {
        if (!isUsed) {
          // 1 2 2 3 3 || 1 1 1 2 2 3 3
          if (val === 1 || val - aver === 1) {
            isUsed = true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
    return true
  }
}

maxEqualFreq([1, 2])
