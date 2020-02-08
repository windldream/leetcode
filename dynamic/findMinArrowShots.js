/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 0) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);

  const len = points.length;
  let count = 1,
    end = points[0][1];
  for (let i = 1; i < len; i++) {
    if (points[i][0] > end) {
      end = points[i][1];
      count++;
    }
  }
  return count;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
  ])
);
