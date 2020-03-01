/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image.length === 0 || image[0].length === 0) {
    return image;
  }

  const m = image.length;
  const n = image[0].length;
  const color = image[sr][sc];
  const visited = {};
  dfs(color, image, sr, sc);
  return image;

  function dfs(color, image, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      color !== image[i][j] ||
      visited[i + '$' + j]
    ) {
      return;
    }
    image[i][j] = newColor;
    visited[i + '$' + j] = 1;
    dfs(color, image, i - 1, j);
    dfs(color, image, i + 1, j);
    dfs(color, image, i, j - 1);
    dfs(color, image, i, j + 1);
  }
};
