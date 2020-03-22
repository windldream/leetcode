/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const graph = {};
  const weight = {};
  for (let i = 0; i < equations.length; i++) {
    const [u, v] = equations[i];
    if (!graph[u]) {
      graph[u] = new Set();
    }
    graph[u].add(v);
    if (!graph[v]) {
      graph[v] = new Set();
    }
    graph[v].add(u);
    weight[u + ',' + v] = values[i];
    weight[v + ',' + u] = 1 / values[i];
  }

  const res = [];
  for (const [u, v] of queries) {
    let tmp = dfs(u, v, new Set());
    if (tmp === 0) {
      tmp = -1.0;
    }
    res.push(tmp);
  }
  return res;

  function dfs(start, end, visited) {
    if (weight[start + ',' + end]) {
      return weight[start + ',' + end];
    }
    if (!graph[start] || !graph[end]) {
      return 0;
    }
    if (visited.has(start)) {
      return 0;
    }
    visited.add(start);

    let res = 0;
    for (const tmp of graph[start]) {
      res = dfs(tmp, end, visited) * weight[start + ',' + tmp];
      if (res !== 0) {
        weight[start + ',' + end] = res;
        break;
      }
    }
    visited.delete(start);
    return res;
  }
};
