/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  const ans = [];
  const graph = Array(n)
    .fill(0)
    .map(() => new Set());
  const degree = Array(n).fill(0);
  const queue = [];

  for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
    degree[u] += 1;
    degree[v] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i);
    }
  }

  if (n === 1) {
    ans.push(0);
  }

  while (n !== 1 && n !== 2) {
    const len = queue.length;
    n -= len;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      for (const next of graph[node]) {
        if (degree[next] > 0) {
          degree[next]--;
        }
        if (degree[next] === 1) {
          queue.push(next);
        }
      }
    }
  }

  while (queue.length) {
    ans.push(queue.shift());
  }

  return ans;
};
