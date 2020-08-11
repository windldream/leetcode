/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  backtrack([], k, 1, n)
  return res

  function backtrack(track, k, start, n) {
    if (n < 0) return
    if (k === 0) {
      if (n === 0) res.push(track.slice())
      return
    }
    for (let i = start; i <= 9; i++) {
      if (track.includes(i)) continue
      track.push(i)
      backtrack(track, k - 1, i + 1, n - i)
      track.pop()
    }
  }
}
