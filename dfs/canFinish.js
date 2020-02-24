/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    return true;
  }

  const graph = Array(numCourses)
      .fill(0)
      .map(() => []),
    inDegress = Array(numCourses).fill(0);

  for (const [second, first] of prerequisites) {
    inDegress[second] += 1;
    graph[first].push(second);
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegress[i] === 0) {
      queue.push(i);
    }
  }

  let counter = 0;
  while (queue.length) {
    const top = queue.shift();
    counter += 1;
    for (const next of graph[top]) {
      inDegress[next] -= 1;
      if (inDegress[next] === 0) {
        queue.push(next);
      }
    }
  }

  return counter === numCourses;
};
