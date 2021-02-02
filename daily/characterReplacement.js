/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const n = s.length
  const nums = Array(26).fill(0)
  let l = 0
  let r = 0
  let ans = 0
  while (r < n) {
    const idx = getIndex(s[r])
    nums[idx] += 1
    while (!check(nums, k) && l <= r) {
      const idx1 = getIndex(s[l])
      nums[idx1] -= 1
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans

  function getIndex(c) {
    return c.charCodeAt() - 'A'.charCodeAt()
  }

  function check(arr, k) {
    outer: for (let i = 0; i < 26; i++) {
      let count = 0
      for (let j = 0; j < arr.length; j++) {
        if (j === i || arr[j] === 0) continue
        if (count <= k) {
          count += arr[j]
          if (count > k) {
            continue outer
          }
        }
      }
      return true
    }
    return false
  }
}

characterReplacement('AAAB', 0)
