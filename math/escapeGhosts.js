/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  const source = [0, 0]
  for (const ghost of ghosts) {
    if (taxi(ghost, target) <= taxi(source, target)) return false
  }
  return true

  function taxi(p, q) {
    return Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1])
  }
}
