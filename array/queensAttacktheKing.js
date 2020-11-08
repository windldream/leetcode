/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  const ans = []
  for (const [i, j] of queens) {
    if (canAttack(i, j, king)) {
      ans.push([i, j])
    }
  }
  return ans

  function canAttack(i, j, king) {
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1]
    ]
    for (const [dx, dy] of dirs) {
      let r = dx + i
      let c = dy + j
      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        if (queens.some((queen) => queen.join('&') === r + '&' + c)) break
        if (r === king[0] && c === king[1]) return true
        r += dx
        c += dy
      }
    }
    return false
  }
}
