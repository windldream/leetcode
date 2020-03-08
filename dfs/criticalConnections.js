/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const dfn = Array(n).fill(0);
  const low = Array(n).fill(0);
  const visited = Array(n).fill(false);
  const edges = Array(n)
    .fill(0)
    .map(() => new Set());
  const res = [];
  let times = 0;

  for (const [u, v] of connections) {
    edges[u].add(v);
    edges[v].add(u);
  }
  tarjan(0, -1);
  return res;

  function tarjan(node, parent) {
    times++;
    // 深度优先搜索遍历时节点 node 被搜索的次序
    dfn[node] = times;
    // 节点 node 能够回溯到的最早位于栈中的节点
    low[node] = times;
    visited[node] = true;

    for (const e of edges[node]) {
      if (e === parent) continue;
      if (!visited[e]) {
        tarjan(e, node);
        low[node] = Math.min(low[e], low[node]);
        // 说明 找到 e 肯定是在找到 node 之后
        // 表示 e 到 node 之间没有环
        if (low[e] > dfn[node]) {
          res.push([node, e]);
        }
      } else {
        // 存在环 则更新节点 node 最早时间
        low[node] = Math.min(low[node], dfn[e]);
      }
    }
  }
};
