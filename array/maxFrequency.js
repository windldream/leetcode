/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  const counterMap = new Map()
  for (const num of nums) {
    counterMap.set(num, (counterMap.get(num) || 0) + 1)
  }

  const keys = [...counterMap.keys()].sort((a, b) => a - b)
  let max = counterMap.get(keys[0])
  for (let i = 1; i < keys.length; i++) {
    let cnt = k
    let cur = keys[i]
    let increase = 0
    for (let j = i - 1; j >= 0; j--) {
      const pre = keys[j]
      const diff = cur - pre
      const n = ~~(cnt / diff)
      if (n < counterMap.get(pre)) {
        increase += n
        break
      } else {
        increase += counterMap.get(pre)
        cnt -= counterMap.get(pre) * diff
      }
    }
    max = Math.max(max, increase + counterMap.get(cur))
  }
  return max
}

maxFrequency([3, 9, 6], 2)
