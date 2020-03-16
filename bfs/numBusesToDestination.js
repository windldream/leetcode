/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
  const queue = [];
  const visited = new Set();
  const graph = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (!graph[routes[i][j]]) {
        graph[routes[i][j]] = new Set();
      }
      graph[routes[i][j]].add(i);
    }
  }

  let step = 0;
  queue.push(S);
  visited.add(S);

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const index = queue.shift();
      if (index === T) {
        return step;
      }

      for (const next of graph[index]) {
        for (const route of routes[next]) {
          if (visited.has(route)) continue;
          queue.push(route);
          visited.add(route);
        }

      }
      // for (let r = 0; r < routes.length; r++) {
      //   if (routes[r].includes(index)) {
      //     for (let c = 0; c < routes[r].length; c++) {
      //       const route = routes[r][c];
      //       if (visited.has(route)) continue;
      //       queue.push(route);
      //       visited.add(route);
      //     }
      //     routes.splice(r, 1); 
      //   }
      // }
    }
    step += 1;
  }
  return -1;
};