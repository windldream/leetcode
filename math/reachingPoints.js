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
      tx -= Math.max(Math.trunc((tx - sx) / ty), 1) * ty
    } else {
      ty -= Math.max(Math.trunc((ty - sy) / tx), 1) * tx
    }
  }
  return false
}
