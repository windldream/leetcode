/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
  const graph = Array(N)
    .fill(0)
    .map(() => []);
  const count = Array(N).fill(0);
  const dist = Array(N).fill(0);
  for (const edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  postOrder(0, -1);
  preOrder(0, -1);

  return dist;

  function postOrder(root, prev) {
    for (const next of graph[root]) {
      if (next === prev) {
        continue;
      }

      postOrder(next, root);

      dist[root] += dist[next] + count[next];
      count[root] += count[next];
    }
    count[root]++;
  }

  function preOrder(root, pre) {
    for (const next of graph[root]) {
      if (next === pre) {
        continue;
      }

      dist[next] = dist[root] - count[next] + N - count[next];

      preOrder(next, root);
    }
  }
};
