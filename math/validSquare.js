/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  return (
    isRightTriangle(p1, p2, p3) &&
    isRightTriangle(p1, p2, p4) &&
    isRightTriangle(p1, p3, p4) &&
    isRightTriangle(p2, p3, p4)
  )
  function isRightTriangle(p1, p2, p3) {
    const d1 = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2
    const d2 = (p1[0] - p3[0]) ** 2 + (p1[1] - p3[1]) ** 2
    const d3 = (p2[0] - p3[0]) ** 2 + (p2[1] - p3[1]) ** 2
    if (
      (d1 > d2 && d2 === d3 && d2 + d3 === d1) ||
      (d2 > d3 && d1 === d3 && d1 + d3 === d2) ||
      (d3 > d1 && d1 === d2 && d1 + d2 === d3)
    ) {
      return true
    }
  }
}
