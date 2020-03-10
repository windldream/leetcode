/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  const visited = Array(n + 1).fill(0);
  const pr = Array(n + 1).fill(0);
  const map = Array(n + 1)
    .fill(0)
    .map(() => new Set());
  for (const [u, v] of edges) {
    map[u].add(v);
    map[v].add(u);
  }

  visited[1] = 1;
  pr[1] = 1;
  dfs(1, t);
  return pr[target];

  function dfs(cur, t) {
    if (t <= 0) return;
    let toCount = 0;
    for (const next of map[cur]) {
      if (!visited[next]) {
        toCount++;
      }
    }
    if (toCount === 0) {
      return;
    }

    const p = pr[cur] / toCount;
    for (const next of map[cur]) {
      if (!visited[next]) {
        visited[next] = 1;
        pr[cur] -= p;
        pr[next] += p;
        dfs(next, t - 1);
        visited[next] = 0;
      }
    }
  }
};
