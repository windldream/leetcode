/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const temp = {};
  for (let i = 0; i < n; i++) {
    const key = 0 + '$' + i;
    temp[key] = [];
    addEle(0, i, temp[key]);
  }

  for (let i = 1; i < m; i++) {
    const key = i + '$' + 0;
    temp[key] = [];
    addEle(i, 0, temp[key]);
  }

  for (const key in temp) {
    temp[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < n; i++) {
    const key = 0 + '$' + i;
    restoreMat(0, i, temp[key], mat);
  }

  for (let i = 1; i < m; i++) {
    const key = i + '$' + 0;
    restoreMat(i, 0, temp[key], mat);
  }

  return mat;

  function addEle(i, j, arr) {
    if (i >= m || j >= n) return;
    arr.push(mat[i][j]);
    addEle(i + 1, j + 1, arr);
  }

  function restoreMat(i, j, arr, mat) {
    if (i >= m || j >= n) return;
    mat[i][j] = arr.shift();
    restoreMat(i + 1, j + 1, arr, mat);
  }
};
