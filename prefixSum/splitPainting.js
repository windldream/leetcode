/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function (segments) {
  const map = Object.create(null)

  for (const [start, end, color] of segments) {
    if (map[start] === undefined) map[start] = 0
    if (map[end] === undefined) map[end] = 0

    map[start] += color
    map[end] -= color
  }

  const ans = []
  let last = 0
  let col = 0

  for (const [num, color] of Object.entries(map)) {
    if (col !== 0) ans.push([last, num, col])
    last = num
    col += color
  }

  return ans
}
