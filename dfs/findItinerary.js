/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  if (tickets.length === 0) {
    return [];
  }
  const graph = {};
  for (const [u, v] of tickets) {
    if (graph[u]) {
      graph[u].push(v);
    } else {
      graph[u] = [];
      graph[u].push(v);
    }
  }

  for (const list of graph) {
    list.sort();
  }
  const res = [];
  dfs(graph, 'JFK', res);
  return res;

  function dfs(graph, src, res) {
    const trip = graph[src];
    while (trip && trip.length) {
      const dest = trip.shift();
      dfs(graph, dest, res);
    }
    res.unshift(src);
  }
};
