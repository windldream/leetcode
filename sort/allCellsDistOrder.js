/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  const res = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      res.push([i, j]);
    }
  }
  res.sort(([i1, j1], [i2, j2]) => {
    return (
      Math.abs(i1 - r0) +
      Math.abs(j1 - c0) -
      (Math.abs(i2 - r0) + Math.abs(j2 - c0))
    );
  });
  return res;
};
