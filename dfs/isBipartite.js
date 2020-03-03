/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const len = graph.length;
  const colors = Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    if (!dfs(graph, i, colors, 0)) {
      return false;
    }
  }
  return true;

  function dfs(graph, index, colors, lastColor) {
    if (colors[index] !== 0) {
      return colors[index] !== lastColor;
    }
    // 将相邻的两个点染成不同的颜色
    colors[index] = lastColor === 1 ? 2 : 1;
    for (const u of graph[index]) {
      if (!dfs(graph, u, colors, colors[i])) {
        return false;
      }
    }
    return true;
  }
};