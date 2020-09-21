/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  let dis = 0
  if (x_center < x1 || x_center > x2) {
    dis += Math.min((x_center - x1) ** 2, (x_center - x2) ** 2)
  }
  if (y_center < y1 || y_center > y2) {
    dis += Math.min((y_center - y1) ** 2, (y_center - y2) ** 2)
  }
  return dis <= radius ** 2
}
