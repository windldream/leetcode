/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  points.sort(([x1, y1], [x2, y2]) => {
    return x1 ** 2 + y1 ** 2 - (x2 ** 2 + y2 ** 2);
  });
  return points.slice(0, K);
};
