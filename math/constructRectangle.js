/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  for (let w = Math.trunc(Math.sqrt(area)); w >= 1; w--) {
    if (area % w === 0) return [area / w, w]
  }
}
