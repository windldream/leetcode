/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const res = []
  const track = S.split('')
  backtrack(track, 0)
  return res

  function backtrack(track, pos) {
    if (!res.includes(track.join(''))) {
      res.push(track.join(''))
    }
    if (pos === track.length) return
    track[pos] = track[pos].toUpperCase()
    backtrack(track, pos + 1)
    track[pos] = track[pos].toLowerCase()
    backtrack(track, pos + 1)
  }
}
