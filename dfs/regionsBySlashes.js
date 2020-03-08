/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const len = grid.length;
  const graph = Array(len * 3)
    .fill(0)
    .map(() => Array(len * 3).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === "/") {
        graph[i * 3][j * 3 + 2] = 1;
        graph[i * 3 + 1][j * 3 + 1] = 1;
        graph[i * 3 + 2][j * 3] = 1;
      } else if (grid[i][j] === "\\") {
        graph[i * 3][j * 3] = 1;
        graph[i * 3 + 1][j * 3 + 1] = 1;
        graph[i * 3 + 2][j * 3 + 2] = 1;
      }
    }
  }

  let res = 0;
  for (let i = 0; i < 3 * len; i++) {
    for (let j = 0; j < 3 * len; j++) {
      if (graph[i][j] === 0) {
        dfs(graph, i, j);
        res += 1;
      }
    }
  }
  return res;

  function dfs(graph, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= graph.length ||
      j >= graph[0].length ||
      graph[i][j] === 1
    )
      return;
    graph[i][j] = 1;
    dfs(graph, i - 1, j);
    dfs(graph, i + 1, j);
    dfs(graph, i, j - 1);
    dfs(graph, i, j + 1);
  }
};
