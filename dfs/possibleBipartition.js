/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  const graph = Array(N + 1).fill(0).map(() => []);
  for (const [a, b] of dislikes) {
    graph[a].push(b);
    graph[b].push(a);
  }
  
  const colors = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    if (!dfs(graph, i, colors, 0)) {
      return false;
    }
  }
  return true;

  function dfs(graph, index, colors, lastColor) {
    if (colors[index] !== 0) {
      return colors[index] !== lastColor;
    }
    // 相邻的人是他讨厌的人 所以颜色不能一样
    colors[index] = lastColor === 1 ? 2 : 1;
    for (const next of graph[index]) {
      if (!dfs(graph, next, colors, colors[index])) {
        return false;
      }
    }
    return true;
  }
};