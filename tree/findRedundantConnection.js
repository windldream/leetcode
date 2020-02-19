/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const map = {};
  for (const edg of edges) {
    const u = edg[0];
    const v = edg[1];

    const visited = [];
    if (hasPath(u, v, map, visited)) {
      return edg;
    }

    if (map[u]) {
      map[u].push(v);
    } else {
      map[u] = [];
      map[u].push(v);
    }

    if (map[v]) {
      map[v].push(u);
    } else {
      map[v] = [];
      map[v].push(u);
    }
  }

  return [];

  function hasPath(u, v, map, visited) {
    if (u === v) {
      return true;
    }

    if (!map[u] || !map[v]) {
      return false;
    }

    visited.push(u);
    for (const next of map[u]) {
      if (visited.includes(next)) {
        continue;
      }

      if (hasPath(next, v, map, visited)) {
        return true;
      }
    }

    return false;
  }
};
