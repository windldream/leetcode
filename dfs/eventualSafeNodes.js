/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  if (graph.length === 0) {
    return [];
  }

  const res = [];
  const len = graph.length;
  const color = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    if (dfs(graph, i, color)) {
      res.push(i);
    }
  }
  return res;

  function dfs(graph, i, color) {
    if (color[i] > 0) {
      return color[i] === 2;
    }
    color[i] = 1;
    for (const next of graph[i]) {
      if (color[next] === 2) {
        continue;
      }
      if (!dfs(graph, next, color)) {
        return false;
      }
    }
    color[i] = 2;
    return true;
  }
};