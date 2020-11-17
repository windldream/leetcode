/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  while (tx > 0 && ty > 0) {
    if (sx === tx && sy === ty) return true
    if (tx > ty) {
      tx -= ty
    } else {
      ty -= tx
    }
  }
  return false
}
