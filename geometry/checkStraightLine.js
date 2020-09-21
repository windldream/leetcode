/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  for (let i = 0; i < coordinates.length - 2; i++) {
    if (!check(coordinates[i], coordinates[i + 1], coordinates[i + 2])) return false
  }
  return true

  function check(a, b, c) {
    return (b[1] - a[1]) * (c[0] - b[0]) === (c[1] - b[1]) * (b[0] - a[0])
  }
}
