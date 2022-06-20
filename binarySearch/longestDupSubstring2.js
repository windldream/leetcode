/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
  const list = new Set()
  let l = 1
  let r = s.length - 1
  let ans = ''

  while (l <= r) {
    list.clear()
    const mid = (l + r) >> 1
    const str = getRepeatStr(s, mid, list)

    if (str) {
      ans = str
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans

  function getRepeatStr(s, mid, list) {
    for (let i = 0; i <= s.length - mid; i++) {
      const str = s.slice(i, i + mid)

      if (list.has(str)) return str

      list.add(str)
    }

    return ''
  }
}
