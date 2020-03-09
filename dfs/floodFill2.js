/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const visited = {};
  dfs(image, sr, sc, newColor, image[sr][sc]);
  return image;

  function dfs(image, sr, sc, newColor, initColor) {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= image.length ||
      sc >= image[0].length ||
      image[sr][sc] !== initColor ||
      visited[sr + '$' + sc]
    ) {
      return;
    }
    image[sr][sc] = newColor;
    visited[sr + '$' + sc] = 1;
    dfs(image, sr - 1, sc, newColor, initColor);
    dfs(image, sr + 1, sc, newColor, initColor);
    dfs(image, sr, sc - 1, newColor, initColor);
    dfs(image, sr, sc + 1, newColor, initColor);
  }
};
