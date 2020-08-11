/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  backtrack([], 0)
  return res

  function backtrack(track, start) {
    if (track.length === 4 && start === s.length) {
      res.push(track.join('.'))
      return
    }
    if (track.length === 4 && start < s.length) return

    for (let len = 1; len <= 3; len++) {
      if (start + len - 1 >= s.length) return
      if (len != 1 && s[start] === '0') return
      const str = s.substring(start, start + len)
      if (str > 255) return
      track.push(str)
      backtrack(track, start + len)
      track.pop()
    }
  }
}
