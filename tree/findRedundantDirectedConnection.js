/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  const len = edges.length,
    parents = Array(len + 1).fill(0),
    roots = Array(len + 1).fill(0),
    sizes = Array(len + 1).fill(1);

  const ans1 = [],
    ans2 = [];
  for (const edg of edges) {
    const u = edg[0];
    const v = edg[1];

    if (parents[v] > 0) {
      ans1 = [parents[v], v];
      ans2 = [u, v];

      edg[0] = edg[1] = -1;
    }

    parents[v] = u;
  }

  for (const edg of edges) {
    const u = edg[0];
    const v = edg[1];

    if (u < 0 || v < 0) {
      continue;
    }

    // 节点最开始的父节点是本身
    if (!roots[u]) {
      roots[u] = u;
    }

    if (!roots[v]) {
      roots[v] = v;
    }

    const pu = find(u, roots);
    const pv = find(v, roots);

    if (pu === pv) {
      return ans1.length === 0 ? edg : ans1;
    }

    roots[pv] = pu;
  }

  return ans2;

  // 查询父节点
  function find(node, root) {
    while (root[node] !== node) {
      root[node] = root[root[node]];
      node = root[node];
    }
    return node;
  }
};
