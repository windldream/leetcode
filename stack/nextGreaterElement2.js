/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const str = (n + '').split('')
  const track = []
  const used = new Set()
  let max = -1
  let exist = false
  backtrack(0, track, used)
  return max

  function backtrack(pos, track, used) {
    if (pos === str.length) {
      const num = parseInt(track.join(''))
      if (num > n && num < 2 ** 31 - 1) {
        if (!exist) {
          exist = true
          max = Math.max(max, num)
        } else {
          max = Math.min(max, num)
        }
      }
      return
    }
    for (let i = 0; i < str.length; i++) {
      if (used.has(i)) continue
      track.push(str[i])
      used.add(i)
      backtrack(pos + 1, track, used)
      track.pop()
      used.delete(i)
    }
  }
}
