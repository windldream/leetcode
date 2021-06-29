/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
  let queue = []
  const visited = new Set()
  const graph = {}
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (!graph[routes[i][j]]) {
        graph[routes[i][j]] = new Set()
      }
      graph[routes[i][j]].add(i)
    }
  }

  let step = 0
  queue.push(S)

  while (queue.length) {
    let len = queue.length
    const tmep = []
    for (let i = 0; i < len; i++) {
      const index = queue[i]
      if (index === T) {
        return step
      }

      for (const next of graph[index]) {
        if (!visited.has(next)) {
          for (const route of routes[next]) {
            tmep.push(route)
          }
        }
        visited.add(next)
      }
    }
    queue = tmep
    step += 1
  }
  return -1
}
