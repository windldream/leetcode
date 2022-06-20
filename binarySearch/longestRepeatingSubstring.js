/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
  const n = s.length
  let l = 1
  let r = n - 1
  let ans = 0

  while (l <= r) {
    const mid = (l + r) >> 1

    if (check(s, mid)) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans

  function check(s, mid) {
    const list = new Set()

    for (let i = 0; i <= s.length - mid; i++) {
      const str = s.slice(i, i + mid)

      if (list.has(str)) return true

      list.add(str)
    }

    return false
  }
}
