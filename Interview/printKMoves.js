/**
 * @param {number} K
 * @return {string[]}
 */
var printKMoves = function (K) {
  let x = 0
  let y = 0
  let pos = 2
  const dirs = [
    [-1, 0, 'L'],
    [0, -1, 'U'],
    [1, 0, 'R'],
    [0, 1, 'D']
  ]
  const blackSet = new Set()

  while (K > 0) {
    const t = x + '&' + y
    if (blackSet.has(t)) {
      blackSet.delete(t)
      pos = (pos + 3) % 4
    } else {
      blackSet.add(t)
      pos = (pos + 1) % 4
    }
    x += dirs[pos][0]
    y += dirs[pos][1]
    K--
  }

  let left = x
  let right = x
  let bottom = y
  let top = y
  for (const t of blackSet) {
    const [x1, y1] = t.split('&')
    left = Math.min(left, x1)
    right = Math.max(right, x1)
    bottom = Math.min(bottom, y1)
    top = Math.max(top, y1)
  }

  const ans = Array(top - bottom + 1)
    .fill(0)
    .map(() => Array(right - left + 1).fill('_'))
  for (const t of blackSet) {
    const [x1, y1] = t
    ans[y1 - bottom][x1 - left] = 'X'
  }
  ans[y - bottom][x - bottom] = dirs[pos][2]

  return ans.map((item) => item.join(''))
}
