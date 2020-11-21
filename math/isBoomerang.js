/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [[ax, ay], [bx, by], [cx, cy]] = points
  if ((ax === bx && ay === by) || (ax === cx && ay === cy) || (bx === cx && by === cy)) return false
  if ((bx - ax) * (by - cy) === (bx - cx) * (by - ay)) return false
  return true
}
