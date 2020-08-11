/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const set = new Set()
  backtrack([], k)
  return res

  function backtrack(track, k) {
    const sum = track.reduce((pre, cur) => pre + cur, 0)
    if (sum > n) return
    if (sum === n && k === 0) {
      const copy = track.slice()
      if (set.has(copy.sort((a, b) => a - b).join(''))) return
      res.push(copy)
      set.add(copy.join(''))
      return
    }
    for (let i = 1; i <= 9; i++) {
      if (track.includes(i)) continue
      track.push(i)
      backtrack(track, k - 1)
      track.pop()
    }
  }
}
