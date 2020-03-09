/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
  const res = [];
  const m = land.length;
  const n = land[0].length;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1]
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 0) {
        const sum = dfs(land, i, j);
        res.push(sum);
      }
    }
  }
  return res.sort((a, b) => a - b);

  function dfs(land, i, j) {
    let sum = 0;
    if (
      i < 0 ||
      j < 0 ||
      i >= land.length ||
      j >= land[0].length ||
      land[i][j] !== 0
    ) {
      return 0;
    }
    sum += 1;
    land[i][j] = 1;
    for (const [r, c] of dir) {
      sum += dfs(land, i + r, j + c);
    }
    return sum;
  }
};
